"use client";

import Link from "next/link";
import AIChatButton from "./AIChatButton";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/spotify", label: "Spotify" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "0.875rem",
        fontWeight: 400,
        color: hovered ? "#f0f4ff" : "rgba(139,149,176,1)",
        padding: "0.35rem 0.75rem",
        borderRadius: "100px",
        textDecoration: "none",
        background: hovered ? "rgba(255,255,255,0.06)" : "transparent",
        transition: "color 0.2s, background 0.2s",
      }}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        transition: "background 0.3s, border-color 0.3s",
        background: scrolled ? "rgba(8,11,18,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.07)"
          : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "0 1rem",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "1rem",
            letterSpacing: "-0.02em",
            background: "linear-gradient(135deg, #a78bfa, #38bdf8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textDecoration: "none",
          }}
        >
          SK
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
          {NAV_LINKS.map(({ href, label }) => (
            <NavLink key={href} href={href} label={label} />
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <AIChatButton />
        </div>
      </div>
    </header>
  );
}