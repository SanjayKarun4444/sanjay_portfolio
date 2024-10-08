import { cn } from "@/lib/utils";
import {Message, useChat} from "ai/react"
import { Bot, SendHorizonal, Trash, XCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { useEffect, useRef } from "react";


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
    } = useChat(); // /api/chat


    const inputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if (scrollRef.current){
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages])


    useEffect(() => {
        if (open) {
            inputRef.current?.focus();
        }
    }, [open]);

    const lastMesageIsUser = messages[messages.length-1]?.role === "user";
    
    

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
                    <div className="mt-3 h-full overflow-y-auto px3" ref={scrollRef}>
                        {messages.map(message =>(
                            <ChatMessage message={message} key={message.id} />
                        ))}
                        {isLoading && lastMesageIsUser && (
                            <ChatMessage
                                message={{
                                    id: "loading",
                                    role: "assistant",
                                    content: "Thinking...",
                                }}
                            />
                        )}
                        {error && (
                            <ChatMessage
                                message={{
                                    id:"error",
                                    role:"assistant",
                                    content:"Something went wrong. Please try again!",
                                }}
                            />
                        )}
                        {!error && messages.length === 0 && (
                            <div className="flex flex-col h-full items-center justify-center gap-3 mx-8">
                                <Bot size={28} />
                                <p className="text-lg font-medium">
                                    Send a message to start the AI Chat!
                                </p>
                                <p className="text-center font-light">
                                    You can ask the chatbot any questions about me and it will find relevant info on this website.
                                </p>
                                <p className="text-sm text-muted-foreground">

                                </p>
                            </div>
                        )}
                    </div>
                    <form onSubmit={handleSubmit} className="m-3 flex gap-1">
                        <button
                            type="button"
                            className="flex items-center justify-center m-10 flex-none p-0"
                            title="Clear chat"
                            onClick={()=>setMessages([])}  
                        >
                            <Trash size={24} />
                        </button>
                        <input 
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Say Something..."
                            className="grow rounded border bg-background px-3 py-1 mt-9"
                            style={{ height: '2rem' }}
                            ref={inputRef}
                        />
                        <button 
                            type="submit"
                            className="flex items-center justify-center m-10 flex-none disable:opacity-50 p-0"
                            disabled={input.length === 0} // isLoading ||   
                            title="Submit message"  
                        >
                            <SendHorizonal size = {24} />
                        </button>
                    </form>
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
        <div 
            className={cn(
                "mb-3 flex items-center", 
                isAiMessage ? "me-5 justify-start" : "ms-5 me-3 justify-end",
            )}
        >
            {isAiMessage && <Bot className="mr-2 flex-none"/>}
            <div 
                className={cn(
                    "rounded-md border px-3 py-2",
                    isAiMessage ? "bg-background" : "bg-foreground text-background",
                )}
            >
                <ReactMarkdown 
                components={{
                    a: ({node, ref, ...props}) => (
                        <Link
                        {...props}
                        href={props.href ?? ""}
                        className="text-primary hover:underline"
                        />
                    ),
                    p:({node, ...props}) =>(
                        <p {...props} className="mt-3 first:mt-0" />
                    ),
                    ul: ({node, ...props}) => (
                        <ul 
                        {...props} 
                        className="mt-3 list-inside list-disc first:mt-0"/>
                    ),
                    li: ({node, ...props}) => <li {...props} className="mt-1" />,
                }}
                >{content}
                </ReactMarkdown>
            </div>
        </div>
    )

}