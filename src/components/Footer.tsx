"use client";

import Link from "next/link";
import { useState } from "react";

const FOOTER_LINKS = [
  { href: "/privacy", label: "Privacy" },
  { href: "/social", label: "Socials" },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: "0.8rem",
        color: hovered ? "#a78bfa" : "rgba(74,81,104,1)",
        textDecoration: "none",
        transition: "color 0.2s",
        fontFamily: "var(--font-body)",
      }}
    >
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: "4rem" }}>
      <div
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "1.5rem 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "0.875rem",
            background: "linear-gradient(135deg, #a78bfa, #38bdf8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Sanjay Karunamoorthy
        </span>

        <nav style={{ display: "flex", gap: "1.5rem" }}>
          {FOOTER_LINKS.map(({ href, label }) => (
            <FooterLink key={href} href={href} label={label} />
          ))}
        </nav>

        <p
          style={{
            fontSize: "0.75rem",
            color: "rgba(74,81,104,1)",
            margin: 0,
            fontFamily: "var(--font-body)",
          }}
        >
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}