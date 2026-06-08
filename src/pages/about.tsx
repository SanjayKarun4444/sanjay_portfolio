import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import "../app/globals.css";

const LANGUAGES = ["Java", "Python", "C", "JavaScript", "TypeScript", "HTML + CSS", "SQL"];
const TECHNOLOGIES = ["Spring", "Django", "React", "OpenSearch", "Next.js", "Node.js", "PyTorch", "MongoDB", "Express", "Kafka", "Git", "REST API"];

export default function About() {
  return (
    <ThemeProvider attribute="class">
      <Navbar />

      <main className="mx-auto max-w-3xl px-4 py-10">
        <section style={{ paddingBottom: "var(--sp-12)" }}>

          {/* ── Heading ── */}
          <div style={{ paddingTop: "var(--sp-8)", paddingBottom: "var(--sp-8)" }}>
            <span className="eyebrow">About</span>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-hero)",
              fontWeight: 600,
              letterSpacing: "var(--ls-tight)",
              lineHeight: "var(--lh-hero)",
              color: "var(--color-text-1)",
              marginTop: "var(--sp-2)",
            }}>
              Who I Am
            </h1>
          </div>

          {/* ── Bio ── */}
          <p style={{
            fontSize: "var(--text-body)",
            lineHeight: "var(--lh-body)",
            color: "var(--color-text-2)",
            maxWidth: "58ch",
            marginBottom: "var(--sp-6)",
          }}>
            I&apos;m a 4th year at UVA pursuing a B.S. in Computer Science with a Minor in Data Science,
            graduating Spring 2026. I&apos;m passionate about solving hard problems and building things
            that matter — production infrastructure, ML systems, and everything in between.
          </p>

          <hr className="divider" style={{ margin: "var(--sp-6) 0" }} />

          {/* ── Skills ── */}
          <div>
            <span className="eyebrow">Skills</span>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-heading)",
              fontWeight: 600,
              letterSpacing: "var(--ls-tight)",
              color: "var(--color-text-1)",
              marginTop: "var(--sp-1)",
              marginBottom: "var(--sp-5)",
            }}>
              What I Work With
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "var(--sp-2)",
            }}>
              <div className="card" style={{ padding: "var(--sp-3)" }}>
                <p style={{
                  fontSize: "var(--text-caption)",
                  fontWeight: 500,
                  letterSpacing: "var(--ls-wide)",
                  textTransform: "uppercase",
                  color: "var(--color-text-3)",
                  marginBottom: "var(--sp-2)",
                }}>
                  Languages
                </p>
                <div>
                  {LANGUAGES.map(s => (
                    <span key={s} className="pill">{s}</span>
                  ))}
                </div>
              </div>

              <div className="card" style={{ padding: "var(--sp-3)" }}>
                <p style={{
                  fontSize: "var(--text-caption)",
                  fontWeight: 500,
                  letterSpacing: "var(--ls-wide)",
                  textTransform: "uppercase",
                  color: "var(--color-text-3)",
                  marginBottom: "var(--sp-2)",
                }}>
                  Technologies
                </p>
                <div>
                  {TECHNOLOGIES.map(s => (
                    <span key={s} className="pill">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </ThemeProvider>
  );
}
