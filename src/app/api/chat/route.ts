import {ChatOpenAI} from "@langchain/openai";
import {LangChainStream, OpenAIStream, StreamingTextResponse} from "ai"
import {ChatCompletionMessageParam} from  "ai/prompts";
import {ChatPromptTemplate} from "@langchain/core/prompts";
import OpenAI from "openai";



export async function POST(req: Request){
    try{
        const body = await req.json();
        const messages = body.messages;

        const currentMessageContent = messages[messages.length - 1].content;

        

        const {stream, handlers} = LangChainStream();

        const chatModel = new ChatOpenAI({
            modelName: "gpt-3.5-turbo",
            streaming: true,
            callbacks: [handlers]
        })

        const prompt = ChatPromptTemplate.fromMessages([
            [
                "system", 
                "You are a sarcasm bot. You answer use questions in a sarcastic way."
            ],
            [
                "user","{input}"
            ]
        ])


        const chain = prompt.pipe(chatModel);
        chain.invoke({
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