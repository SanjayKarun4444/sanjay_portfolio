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
          background: "var(--color-surface)",
          border: "1px solid var(--color-border-2)",
          borderRadius: "var(--radius-lg)",
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
            borderBottom: "1px solid var(--color-border)",
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
                background: "var(--color-accent-subtle)",
                border: "1px solid var(--color-accent-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Bot size={15} color="var(--color-accent)" />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  color: "var(--color-text-1)",
                  margin: 0,
                }}
              >
                Ask about Sanjay
              </p>
              <p style={{ fontSize: "0.7rem", color: "var(--color-text-3)", margin: 0 }}>
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
              color: "var(--color-text-2)",
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
                  background: "var(--color-accent-subtle)",
                  border: "1px solid var(--color-accent-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Bot size={22} color="var(--color-accent)" />
              </div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  color: "var(--color-text-1)",
                  margin: 0,
                }}
              >
                Ask me anything
              </p>
              <p style={{ fontSize: "0.8rem", color: "var(--color-text-2)", margin: 0, lineHeight: 1.6 }}>
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
              color: "var(--color-text-3)",
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
              color: "var(--color-text-1)",
              outline: "none",
              fontFamily: "var(--font-body)",
            }}
            onFocus={e => (e.target.style.borderColor = "rgba(201,164,107,0.4)")}
            onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.09)")}
          />

          <button
            type="submit"
            disabled={input.length === 0}
            title="Send"
            style={{
              background: input.length > 0
                ? "var(--color-accent)"
                : "var(--color-surface-2)",
              border: "1px solid",
              borderColor: input.length > 0 ? "var(--color-accent)" : "var(--color-border)",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: input.length > 0 ? "pointer" : "not-allowed",
              flexShrink: 0,
              color: input.length > 0 ? "var(--color-bg)" : "var(--color-text-3)",
              transition: "background var(--transition-ui), border-color var(--transition-ui)",
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
            background: "var(--color-accent-subtle)",
            border: "1px solid var(--color-accent-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Bot size={12} color="var(--color-accent)" />
        </div>
      )}

      <div
        style={{
          maxWidth: "82%",
          padding: "0.6rem 0.875rem",
          borderRadius: isAI ? "4px 16px 16px 16px" : "16px 4px 16px 16px",
          background: isAI
            ? "var(--color-surface-2)"
            : "var(--color-accent)",
          border: isAI ? "1px solid var(--color-border)" : "none",
          fontSize: "0.875rem",
          /* User bubbles: dark bg text; AI bubbles: primary text */
          color: isAI ? "var(--color-text-1)" : "var(--color-bg)",
          lineHeight: 1.6,
        }}
      >
        <ReactMarkdown
          components={{
            a: ({ node, ref, ...props }) => (
              <Link
                {...props}
                href={props.href ?? ""}
                style={{ color: "var(--color-accent)", textDecoration: "underline" }}
              />
            ),
            p: ({ node, ...props }) => (
              /* color:inherit stops the global `p { color: var(--color-text-2) }`
                 from overriding the bubble's own text color */
              <p {...props} style={{ margin: "0.5rem 0 0", color: "inherit" }} className="first:mt-0" />
            ),
            ul: ({ node, ...props }) => (
              <ul {...props} style={{ marginTop: "0.5rem", paddingLeft: "1.25rem", color: "inherit" }} />
            ),
            li: ({ node, ...props }) => (
              <li {...props} style={{ marginTop: "0.25rem", color: "inherit" }} />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}