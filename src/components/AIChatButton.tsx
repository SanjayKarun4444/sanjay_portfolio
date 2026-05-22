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
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "34px",
          height: "34px",
          borderRadius: "100px",
          border: "1px solid rgba(108,99,255,0.3)",
          background: "rgba(108,99,255,0.1)",
          color: "#a78bfa",
          cursor: "pointer",
          transition: "background 0.2s, border-color 0.2s, transform 0.15s",
        }}
        onMouseEnter={e => {
          const el = e.currentTarget;
          el.style.background = "rgba(108,99,255,0.2)";
          el.style.borderColor = "rgba(108,99,255,0.5)";
          el.style.transform = "scale(1.05)";
        }}
        onMouseLeave={e => {
          const el = e.currentTarget;
          el.style.background = "rgba(108,99,255,0.1)";
          el.style.borderColor = "rgba(108,99,255,0.3)";
          el.style.transform = "scale(1)";
        }}
      >
        <Bot size={16} />
      </button>
      <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
}