"use client";

import { Bot } from "lucide-react";
import { useState } from "react";
import AIChatBox from "./AIChatBox";

export default function AIChatButton() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setChatBoxOpen(true)}
        title="Open AI chat"
        aria-label="Open AI chat"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "32px",
          height: "32px",
          borderRadius: "var(--radius-full)",
          border: "1px solid var(--color-accent-border)",
          background: "var(--color-accent-subtle)",
          color: "var(--color-accent)",
          cursor: "pointer",
          transition: "background var(--transition-ui), border-color var(--transition-ui)",
          flexShrink: 0,
        }}
        onMouseEnter={e => {
          const el = e.currentTarget;
          el.style.background = "rgba(201,164,107,0.18)";
          el.style.borderColor = "rgba(201,164,107,0.45)";
        }}
        onMouseLeave={e => {
          const el = e.currentTarget;
          el.style.background = "var(--color-accent-subtle)";
          el.style.borderColor = "var(--color-accent-border)";
        }}
      >
        <Bot size={15} />
      </button>
      <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
}
