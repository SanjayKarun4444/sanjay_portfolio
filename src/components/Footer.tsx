"use client";

import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/privacy", label: "Privacy" },
  { href: "/social", label: "Socials" },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-link {
          font-family: var(--font-body);
          font-size: var(--text-caption);
          color: var(--color-text-3);
          text-decoration: none;
          transition: color var(--transition-ui);
        }
        .footer-link:hover {
          color: var(--color-text-2);
          opacity: 1;
        }
      `}</style>

      <footer style={{
        borderTop: "1px solid var(--color-border)",
        marginTop: "var(--sp-8)",
      }}>
        <div style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "var(--sp-3) var(--sp-2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "var(--sp-2)",
        }}>
          <span style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "var(--text-body)",
            letterSpacing: "var(--ls-tight)",
            color: "var(--color-text-2)",
          }}>
            Sanjay Karunamoorthy
          </span>

          <nav aria-label="Footer navigation" style={{ display: "flex", gap: "var(--sp-3)" }}>
            {FOOTER_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className="footer-link">
                {label}
              </Link>
            ))}
          </nav>

          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-caption)",
            color: "var(--color-text-3)",
            margin: 0,
          }}>
            © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
}
