"use client";

import { cn } from "@/lib/utils";
import { Message, useChat } from "ai/react";
import { Bot, SendHorizonal, Trash, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface AIChatBoxProps {
  open: boolean;
  onClose: () => void;
}

export default function AIChatBox({ open, onClose }: AIChatBoxProps) {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat();

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const lastMessageIsUser = messages[messages.length - 1]?.role === "user";

  if (!open) return null;

  const panel = (
    <div
      style={{
        position: "fixed",
        bottom: "1.25rem",
        right: "1.25rem",
        zIndex: 9999,
        width: "calc(100vw - 2.5rem)",
        maxWidth: "420px",
      }}
    >
      <div
        style={{
          background: "#0f1420",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          height: "520px",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "1rem 1.25rem",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: "rgba(108,99,255,0.15)",
                border: "1px solid rgba(108,99,255,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Bot size={15} color="#a78bfa" />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  color: "#f0f4ff",
                  margin: 0,
                }}
              >
                Ask about Sanjay
              </p>
              <p style={{ fontSize: "0.7rem", color: "#4a5168", margin: 0 }}>
                AI-powered · RAG
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "50%",
              width: "28px",
              height: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#8b95b0",
            }}
          >
            <X size={13} />
          </button>
        </div>

        {/* Messages */}
        <div
          ref={scrollRef}
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(255,255,255,0.1) transparent",
          }}
        >
          {messages.map(message => (
            <ChatMessage message={message} key={message.id} />
          ))}

          {isLoading && lastMessageIsUser && (
            <ChatMessage message={{ id: "loading", role: "assistant", content: "···" }} />
          )}

          {error && (
            <ChatMessage
              message={{
                id: "error",
                role: "assistant",
                content: "Something went wrong. Please try again.",
              }}
            />
          )}

          {!error && messages.length === 0 && (
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                padding: "2rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "rgba(108,99,255,0.1)",
                  border: "1px solid rgba(108,99,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Bot size={22} color="#a78bfa" />
              </div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  color: "#f0f4ff",
                  margin: 0,
                }}
              >
                Ask me anything
              </p>
              <p style={{ fontSize: "0.8rem", color: "#8b95b0", margin: 0, lineHeight: 1.6 }}>
                I can answer questions about Sanjay&apos;s experience, projects, and skills.
              </p>
            </div>
          )}
        </div>

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          style={{
            padding: "0.875rem 1rem",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            flexShrink: 0,
          }}
        >
          <button
            type="button"
            title="Clear chat"
            onClick={() => setMessages([])}
            style={{
              background: "transparent",
              border: "none",
              color: "#4a5168",
              cursor: "pointer",
              padding: "6px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <Trash size={15} />
          </button>

          <input
            ref={inputRef}
            value={input}
            onChange={handleInputChange}
            placeholder="Ask something…"
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "100px",
              padding: "0.45rem 1rem",
              fontSize: "0.875rem",
              color: "#f0f4ff",
              outline: "none",
              fontFamily: "var(--font-body)",
            }}
            onFocus={e => (e.target.style.borderColor = "rgba(108,99,255,0.4)")}
            onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.09)")}
          />

          <button
            type="submit"
            disabled={input.length === 0}
            title="Send"
            style={{
              background: input.length > 0
                ? "linear-gradient(135deg, #6c63ff, #a78bfa)"
                : "rgba(255,255,255,0.05)",
              border: "none",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: input.length > 0 ? "pointer" : "not-allowed",
              flexShrink: 0,
              color: input.length > 0 ? "#fff" : "#4a5168",
            }}
          >
            <SendHorizonal size={14} />
          </button>
        </form>
      </div>
    </div>
  );

  // Portal to document.body so position:fixed is never trapped by a parent transform/overflow
  if (typeof document === "undefined") return null;
  return createPortal(panel, document.body);
}

interface ChatMessageProps {
  message: Message;
}

function ChatMessage({ message: { role, content } }: ChatMessageProps) {
  const isAI = role === "assistant";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: "0.5rem",
        justifyContent: isAI ? "flex-start" : "flex-end",
      }}
    >
      {isAI && (
        <div
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            background: "rgba(108,99,255,0.15)",
            border: "1px solid rgba(108,99,255,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Bot size={12} color="#a78bfa" />
        </div>
      )}

      <div
        style={{
          maxWidth: "82%",
          padding: "0.6rem 0.875rem",
          borderRadius: isAI ? "4px 16px 16px 16px" : "16px 4px 16px 16px",
          background: isAI
            ? "rgba(255,255,255,0.05)"
            : "linear-gradient(135deg, #6c63ff, #a78bfa)",
          border: isAI ? "1px solid rgba(255,255,255,0.07)" : "none",
          fontSize: "0.875rem",
          color: "#f0f4ff",
          lineHeight: 1.6,
        }}
      >
        <ReactMarkdown
          components={{
            a: ({ node, ref, ...props }) => (
              <Link
                {...props}
                href={props.href ?? ""}
                style={{ color: "#38bdf8", textDecoration: "underline" }}
              />
            ),
            p: ({ node, ...props }) => (
              <p {...props} style={{ margin: "0.5rem 0 0" }} className="first:mt-0" />
            ),
            ul: ({ node, ...props }) => (
              <ul {...props} style={{ marginTop: "0.5rem", paddingLeft: "1.25rem" }} />
            ),
            li: ({ node, ...props }) => (
              <li {...props} style={{ marginTop: "0.25rem" }} />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}