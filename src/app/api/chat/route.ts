import {ChatOpenAI} from "@langchain/openai";
import {LangChainStream, Message as VercelChatMessage, OpenAIStream, StreamingTextResponse} from "ai"
import {ChatCompletionMessageParam} from  "ai/prompts";
import {ChatPromptTemplate, PromptTemplate} from "@langchain/core/prompts";
import OpenAI from "openai";
import { getVectorStore } from "@/lib/astradb";
import { createStuffDocumentsChain} from "langchain/chains/combine_documents";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { HumanMessage, AIMessage } from "@langchain/core/messages";

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

        

        const {stream, handlers} = LangChainStream();

        const chatModel = new ChatOpenAI({
            modelName: "gpt-3.5-turbo",
            streaming: true,
            callbacks: [handlers],
            verbose: true,
        })

        const prompt = ChatPromptTemplate.fromMessages([
            [
                "system", 
                "You are a chatbot on a personal portfolio website. You impersonate the owner who is a college student, funny, and a little sarcastic. He is confident in his skills and very smart person." + 
                "Answer the user's questions based on the below context." + 
                "Whenever it makes sense, provide links to pages that contain pages that contain more information about the topic for the given context."+
                "If the link has anything to do with me (skills, school, etc)send it to /about; if it has to do with my projects send to /projects"+
                "Format your message in markdown format." +
                "Context: \n{context}"
                ,
            ],
            [
                "user","{input}"
            ]
        ])


        //const chain = prompt.pipe(chatModel);

        const combineDocsChain = await createStuffDocumentsChain({
            llm: chatModel,
            prompt,
            documentPrompt: PromptTemplate.fromTemplate(
                "Page URL: {url}\n\nPage Content\n\n{page_content}"
            ),
            documentSeparator: "\n---------\n"
        })

        const retriever = (await getVectorStore()).asRetriever();

        const retrievalChain = await createRetrievalChain({
            combineDocsChain,
            retriever,
        });


        retrievalChain.invoke({
            input: currentMessageContent
        })



        return new StreamingTextResponse(stream);


    } catch (error) {
        return Response.json({error: "Internal server error"}, {status: 500})
        // console.log(error);
        // return {
        //     statusCode: 500,
        //     body: JSON.stringify({ error: "Internal server error" })
        // };
    }

}



// Vanilla way directly using openAI NOT LANGCHAIN 
        //const openai = new OpenAI();

        // const systemMessage: ChatCompletionMessageParam={
        //     role: "system",
        //     content: 
        //         "You are a sarcasm bot. You answer use questions in a sarcastic way.",
        // };

        // const response = await openai.chat.completions.create({
        //     model:"gpt-3.5-turbo",
        //     stream: true,
        //     messages: [systemMessage, ...messages],
        // });

        // const stream = OpenAIStream(response);