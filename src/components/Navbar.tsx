"use client";

import Link from "next/link";
import AIChatButton from "./AIChatButton";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  // { href: "/about", label: "About" },
  // { href: "/projects", label: "Projects" },
  { href: "/spotify", label: "Spotify" },
];

/* CSS-driven hover via injected <style> avoids per-link
   useState, keeping this component lean. */
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="nav-link">
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav-link {
          font-family: var(--font-body);
          font-size: var(--text-caption);
          font-weight: 400;
          color: var(--color-text-2);
          padding: 6px 12px;
          border-radius: var(--radius-full);
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color var(--transition-ui), background var(--transition-ui);
        }
        .nav-link:hover {
          color: var(--color-text-1);
          background: rgba(255, 255, 255, 0.05);
          opacity: 1;
        }
        .nav-link:focus-visible {
          outline: 2px solid var(--color-focus);
          outline-offset: 2px;
          border-radius: var(--radius-sm);
        }
      `}</style>

      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: scrolled ? "rgba(12, 12, 12, 0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--color-border)"
          : "1px solid transparent",
        transition: "background var(--transition-ui), border-color var(--transition-ui)",
      }}>
        <div style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "0 1rem",
          height: "56px",   /* 56 = 7 × 8pt */
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <Link href="/" style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "1.125rem",
            letterSpacing: "var(--ls-tight)",
            color: "var(--color-text-1)",
            textDecoration: "none",
            transition: "opacity var(--transition-ui)",
          }}>
            SK
          </Link>

          <nav aria-label="Primary navigation" style={{ display: "flex", alignItems: "center", gap: "2px" }}>
            {NAV_LINKS.map(({ href, label }) => (
              <NavLink key={href} href={href} label={label} />
            ))}
          </nav>

          <AIChatButton />
        </div>
      </header>
    </>
  );
}