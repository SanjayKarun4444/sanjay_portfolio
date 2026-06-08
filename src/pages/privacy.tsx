import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import Link from "next/link";
import "../app/globals.css";

export default function Privacy() {
  return (
    <ThemeProvider attribute="class">
      <Navbar />

      <main className="mx-auto max-w-3xl px-4 py-10">
        <section style={{ paddingTop: "var(--sp-8)", paddingBottom: "var(--sp-12)" }}>
          <span className="eyebrow">Legal</span>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-heading)",
            fontWeight: 600,
            letterSpacing: "var(--ls-tight)",
            color: "var(--color-text-1)",
            marginTop: "var(--sp-2)",
            marginBottom: "var(--sp-4)",
          }}>
            Privacy Policy
          </h1>
          <p style={{ color: "var(--color-text-2)", maxWidth: "52ch", marginBottom: "var(--sp-4)" }}>
            I don&apos;t collect any data from you. Even if I did, what would I do with it&nbsp;😉
          </p>
          <Link href="/" style={{ fontSize: "var(--text-caption)", color: "var(--color-accent)" }}>
            ← Back to home
          </Link>
        </section>
      </main>

      <Footer />
    </ThemeProvider>
  );
}
