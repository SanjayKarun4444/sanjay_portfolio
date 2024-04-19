import { cn } from "@/lib/utils";
import {Message, useChat} from "ai/react"
import { XCircle } from "lucide-react";


interface AIChatBoxProps {
    open: boolean;
    onClose: () => void
}


export default function AIChatBox({open, onClose} : AIChatBoxProps) {
    const {
        messages,
        input,
        handleInputChange,
        handleSubmit,
        setMessages,
        isLoading,
        error,
    } = useChat({
        initialMessages: [
            {
                id:"1",
                role:"assistant",
                content:"Hi, I am Chatbot!"
            },
            {
                id:"2",
                role:"user",
                content:"Hi, I am User!"
            }

        ]
    }); // /api/chat

    return ( 
        <div 
            className={cn(
                "bottom-0 right-0 z-50 w-full max-w-[500px] p-1 xl:right-36",
                open ? "fixed" : "hidden",
            )}
            >
                <button onClick={onClose} className="mb-1 ms-auto block">
                    <XCircle size={30} className="rounded-full bg-background" />
                </button>
                <div className="flex h-[500px] flex-col rounded border bg-background shadow-xl">
                    <div className="mt-3 h-full overflow-y-auto px3">
                        {messages.map(message =>(
                            <ChatMessage message={message} key={message.id} />
                        ))}
                    </div>

                </div>
        </div>
    );
}

interface ChatMessageProps{
    message: Message
}

function ChatMessage({message: {role, content}}: ChatMessageProps){
    const isAiMessage = role === "assistant";

    return (
        <div>
            Role: {role}
            Message: {content}
        </div>
    )

}