import {ChatOpenAI} from "@langchain/openai";
import {LangChainStream, Message as VercelChatMessage, OpenAIStream, StreamingTextResponse} from "ai"
import {ChatCompletionMessageParam} from  "ai/prompts";
import {ChatPromptTemplate, PromptTemplate, MessagesPlaceholder} from "@langchain/core/prompts";
import OpenAI from "openai";
import { getVectorStore } from "@/lib/astradb";
import { createStuffDocumentsChain} from "langchain/chains/combine_documents";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";
import { HumanMessage, AIMessage } from "@langchain/core/messages";
import { Redis } from "@upstash/redis";
import { UpstashRedisCache } from "langchain/cache/upstash_redis"
import fs from "fs";
import path from "path";

// Updated function to get relevant context from content.json
function getRelevantContext(input: string, contextData: any): string {
    const lower = input.toLowerCase();
    if (lower.includes("project")) {
        return JSON.stringify(contextData.projects, null, 2);
    }
    if (lower.includes("geico")) {
        return JSON.stringify(contextData.experience?.find((exp: any) => exp.company?.toLowerCase() === "geico"), null, 2);
    }
    if (lower.includes("3m")) {
        return JSON.stringify(contextData.experience?.find((exp: any) => exp.company?.toLowerCase() === "3m"), null, 2);
    }
    if (lower.includes("ss technology")) {
        return JSON.stringify(contextData.experience?.find((exp: any) => exp.company?.toLowerCase() === "ss technology"), null, 2);
    }
    if (lower.includes("skill")) {
        return JSON.stringify(contextData.about?.skills, null, 2);
    }
    if (lower.includes("about") || lower.includes("bio")) {
        return JSON.stringify(contextData.about, null, 2);
    }
    if (lower.includes("experience") || lower.includes("work") || lower.includes("job")) {
        return JSON.stringify(contextData.experience, null, 2);
    }
    // Default: send the whole context
    return JSON.stringify(contextData, null, 2);
}

export async function POST(req: Request){
    try{
        const body = await req.json();
        const messages = body.messages;

        const chatHistory = messages
            .slice(0,-1)
            .map((m:VercelChatMessage) => 
                m.role == "user" 
                ? new HumanMessage(m.content)
                : new AIMessage(m.content),
        );

        const currentMessageContent = messages[messages.length - 1].content;

        const cache = new UpstashRedisCache({
            client: Redis.fromEnv(),
        });

        const {stream, handlers} = LangChainStream();

        const chatModel = new ChatOpenAI({
            modelName: "gpt-3.5-turbo",
            streaming: true,
            callbacks: [handlers],
            verbose: true,
            cache,
        })

        // Load and get relevant context from JSON file
        const contextPath = path.join(process.cwd(), "src", "content.json");
        const contextData = JSON.parse(fs.readFileSync(contextPath, "utf-8"));
        const relevantContext = getRelevantContext(currentMessageContent, contextData);

        const prompt = ChatPromptTemplate.fromMessages([
            [
                "system", 
                "You are a chatbot on a personal portfolio website. You impersonate the owner who is a college student, funny, and a little sarcastic (don't mention that I am sarcastic, you should be lightly sarcastic when answering questions as a chatbot)."
                + "He is confident in his skills and very smart person." + "The owners hobbies are listening to and making music, listening to podcasts, watching netflix, and reading books. (randomly pick a few if asked)" + 
                "Answer the user's questions based on the below context." + 
                "Whenever it makes sense, provide links to pages that contain more information about the topic for the given context."+
                "If the link has anything to do with me (skills, school, etc)send it to /about; if it has to do with my projects send to /projects"+
                "Format your message in markdown format." + "Make sure to refer to the structured JSON data for answering questions specific to a company or project." + 
                "Context: \n{context}"
            ],
            new MessagesPlaceholder("chat_history"),
            ["user","{input}"],
        ])

        // Use simple chain that respects the context parameter
        const chain = prompt.pipe(chatModel);

        await chain.invoke({
            input: currentMessageContent,
            chat_history: chatHistory,
            context: relevantContext, // This will now actually be used
        });

        return new StreamingTextResponse(stream);

    } catch (error) {
        console.error(error);
        return Response.json({error: "Internal server error"}, {status: 500})
    }
}