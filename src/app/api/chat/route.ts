import { NextApiRequest, NextApiResponse } from "next";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { ChatCompletionMessageParam } from "ai/prompts";
import OpenAI from "openai";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const body = req.body;
        const messages = body.messages;

        const openai = new OpenAI();

        const systemMessage: ChatCompletionMessageParam = {
            role: "system",
            content:
                "You are a sarcasm bot. You answer use questions in a sarcastic way.",
        };

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            stream: true,
            messages: [systemMessage, ...messages],
        });

        const stream = OpenAIStream(response);
        // Respond with the stream directly
        res.send(new StreamingTextResponse(stream));

    } catch (error) {
        // Handle errors properly
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}
