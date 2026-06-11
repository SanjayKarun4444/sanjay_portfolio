"use client";

import dynamic from "next/dynamic";

/* ── Sub-components ─────────────────────────────────────────── */

interface ProjectCardProps {
  title: string;
  description: string[];
  stack: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, stack}) => (
  <div className="card" style={{ padding: "var(--sp-3)", display: "flex", flexDirection: "column", height: "100%" }}>
    <div style={{ flex: 1 }}>
      <h3 style={{
        fontFamily: "var(--font-display)",
        fontSize: "1.125rem",
        fontWeight: 600,
        letterSpacing: "var(--ls-tight)",
        color: "var(--color-text-1)",
        marginBottom: "var(--sp-2)",
        lineHeight: "var(--lh-heading)",
      }}>
        {title}
      </h3>
      <ul className="bullet-list">
        {description.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>

    <div style={{
      marginTop: "var(--sp-3)",
      paddingTop: "var(--sp-2)",
      borderTop: "1px solid var(--color-border)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: "var(--sp-2)",
      flexWrap: "wrap",
    }}>
      <p style={{ fontSize: "var(--text-caption)", color: "var(--color-text-3)", margin: 0, lineHeight: 1.5 }}>
        {stack}
      </p>
      {/* <span style={{
        fontSize: "var(--text-caption)",
        fontFamily: "var(--font-body)",
        fontWeight: 500,
        letterSpacing: "var(--ls-wide)",
        color: "var(--color-accent)",
        whiteSpace: "nowrap",
      }}>
        {dateRange}
      </span> */}
    </div>
  </div>
);

/* Section eyebrow + heading pair */
const SectionHeading = ({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: "var(--sp-5)" }}>
    <span className="eyebrow">{eyebrow}</span>
    <h2 style={{
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-heading)",
      fontWeight: 600,
      letterSpacing: "var(--ls-tight)",
      color: "var(--color-text-1)",
      lineHeight: "var(--lh-heading)",
    }}>
      {children}
    </h2>
  </div>
);

/* ── Page ────────────────────────────────────────────────────── */
const Home = () => {
  const TypeAnimation = dynamic(() => import("../components/typedAnimation"), { ssr: false });

  return (
    <section style={{ paddingBottom: "var(--sp-12)" }}>

      {/* ════════════════════════════════════════ HERO ════════ */}
      <section style={{ paddingTop: "var(--sp-8)", paddingBottom: "var(--sp-10)", textAlign: "center" }}>

        <span className="eyebrow animate-in" style={{ display: "inline-block", fontSize: "var(--text-caption)" }}>
          Computer Science × Data Science — UVA
        </span>

        <h1 className="animate-in animate-delay-1" style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-hero)",
          fontWeight: 600,
          letterSpacing: "var(--ls-tight)",
          lineHeight: "var(--lh-hero)",
          color: "var(--color-text-1)",
          margin: "var(--sp-3) 0 var(--sp-4)",
        }}>
          Sanjay<br />Karunamoorthy
        </h1>

        <div className="animate-in animate-delay-2" style={{
          fontSize: "var(--text-body)",
          color: "var(--color-text-2)",
          marginBottom: "var(--sp-6)",
          minHeight: "1.75rem",
        }}>
          <TypeAnimation />
        </div>

        {/* Chatbot nudge */}
        <div className="animate-in animate-delay-3" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "var(--sp-1)",
          padding: "6px 16px",
          borderRadius: "var(--radius-full)",
          background: "var(--color-accent-subtle)",
          border: "1px solid var(--color-accent-border)",
          fontSize: "var(--text-caption)",
          color: "var(--color-text-2)",
        }}>
          Use the bot icon above to ask me anything
        </div>

        <p className="animate-in animate-delay-4" style={{
          marginTop: "var(--sp-2)",
          fontSize: "var(--text-caption)",
          color: "var(--color-text-3)",
        }}>
          If the chatbot errors, email{" "}
          <a href="mailto:sanjaykarun@gmail.com">sanjaykarun@gmail.com</a>
          {" "}to wake up AstraDB.
        </p>
      </section>

      <hr className="divider" />

      {/* ════════════════════════════════════════ ABOUT ═══════ */}
      <section>
        <SectionHeading eyebrow="About">Who I Am</SectionHeading>
        <p style={{
          fontSize: "var(--text-body)",
          lineHeight: "var(--lh-body)",
          color: "var(--color-text-2)",
          maxWidth: "58ch",
        }}>
          I&apos;m a UVA Alumn with a B.S. in Computer Science with a Minor in Data Science.
          I&apos;m passionate about solving hard problems and building things that
          matter from production infrastructure, ML systems, and everything in between.
        </p>

        {/* Skills */}
        <div style={{ marginTop: "var(--sp-5)" }}>
          <span className="eyebrow">Skills</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "var(--sp-2)", marginTop: "var(--sp-2)" }}>
            <div className="card" style={{ padding: "var(--sp-3)" }}>
              <p style={{ fontSize: "var(--text-caption)", fontWeight: 500, letterSpacing: "var(--ls-wide)", textTransform: "uppercase", color: "var(--color-text-3)", marginBottom: "var(--sp-2)" }}>
                Languages
              </p>
              <div>
                {["Java", "Python", "C", "JavaScript", "TypeScript", "HTML + CSS", "SQL"].map(s => (
                  <span key={s} className="pill">{s}</span>
                ))}
              </div>
            </div>
            <div className="card" style={{ padding: "var(--sp-3)" }}>
              <p style={{ fontSize: "var(--text-caption)", fontWeight: 500, letterSpacing: "var(--ls-wide)", textTransform: "uppercase", color: "var(--color-text-3)", marginBottom: "var(--sp-2)" }}>
                Technologies
              </p>
              <div>
                {["Spring", "Django", "React", "OpenSearch", "Next.js", "Node.js", "PyTorch", "MongoDB", "Express", "Kafka", "Git", "REST API"].map(s => (
                  <span key={s} className="pill">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ════════════════════════════════════════ EXPERIENCE ══ */}
      <section>
        <SectionHeading eyebrow="Experience">Where I&apos;ve Worked</SectionHeading>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-2)" }}>

          <div className="card" style={{ position: "relative", overflow: "hidden", padding: "var(--sp-4) var(--sp-4) var(--sp-4) calc(var(--sp-4) + 10px)" }}>
            <div className="exp-accent-bar" />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "var(--sp-1)", marginBottom: "var(--sp-2)" }}>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.125rem", letterSpacing: "var(--ls-tight)" }}>
                  University of Virginia
                </h3>
                <p style={{ fontSize: "var(--text-caption)", color: "var(--color-accent)", margin: 0, fontWeight: 500 }}>
                  Undergraduate AI Researcher
                </p>
              </div>
              <span style={{ fontSize: "var(--text-caption)", color: "var(--color-text-3)", whiteSpace: "nowrap" }}>
                Aug 2025 – Present
              </span>
            </div>
            <ul className="bullet-list">
              <li>Training Reinforcement Learning agents to collaborate with humans to improve task performance using Proximal Policy Optimization. Conducting experiments in multi-agent settings to analyze cooperation, incentives, and emergent behaviors.</li>
            </ul>
          </div>

          <div className="card" style={{ position: "relative", overflow: "hidden", padding: "var(--sp-4) var(--sp-4) var(--sp-4) calc(var(--sp-4) + 10px)" }}>
            <div className="exp-accent-bar" />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "var(--sp-1)", marginBottom: "var(--sp-2)" }}>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.125rem", letterSpacing: "var(--ls-tight)" }}>
                  GEICO
                </h3>
                <p style={{ fontSize: "var(--text-caption)", color: "var(--color-accent)", margin: 0, fontWeight: 500 }}>
                  Software Development Intern
                </p>
              </div>
              <span style={{ fontSize: "var(--text-caption)", color: "var(--color-text-3)", whiteSpace: "nowrap" }}>
                Jun 2025 – Aug 2025
              </span>
            </div>
            <ul className="bullet-list">
              <li>Pioneered an MVP dashboard for a Project Development Life Cycle management system based on Shift Left methodology; built a REST API with Django, PostgreSQL, TypeScript, and React — scoped to benefit 3,000+ engineers.</li>
              <li>Partnered with 15+ Senior Directors, VPs, PMs, and SMEs to design a workflow optimization system with JSON integration, Redis caching, GraphQL, and Azure DevOps/Slack automation.</li>
              <li>Implemented bidirectional synchronization and timed reloads to prevent race conditions.</li>
              <li>Engineered an email automation script by pre-processing 17,000+ repos to reach 2,000+ system owners; used Power BI, Excel, and pandas for data organization and delivery.</li>
            </ul>
          </div>

          <div className="card" style={{ position: "relative", overflow: "hidden", padding: "var(--sp-4) var(--sp-4) var(--sp-4) calc(var(--sp-4) + 10px)" }}>
            <div className="exp-accent-bar" />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "var(--sp-1)", marginBottom: "var(--sp-2)" }}>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.125rem", letterSpacing: "var(--ls-tight)" }}>
                  SS Technology Consultants
                </h3>
                <p style={{ fontSize: "var(--text-caption)", color: "var(--color-accent)", margin: 0, fontWeight: 500 }}>
                  Software Engineer Intern
                </p>
              </div>
              <span style={{ fontSize: "var(--text-caption)", color: "var(--color-text-3)", whiteSpace: "nowrap" }}>
                May 2024 – Jul 2024
              </span>
            </div>
            <ul className="bullet-list">
              <li>Built an efficient data processing solution using Spring Boot and Spring Batch on a 3M Project, handling 2M+ search data points from Salesforce and SharePoint.</li>
              <li>Optimized big data pipelines with Apache Airflow and Kafka, achieving a 6% improvement in semantic search processing efficiency.</li>
              <li>Leveraged Amazon Bedrock + Titan Text Embeddings for NLP and vectorized search for RAG.</li>
              <li>Implemented kNN vectors (k=5) with lambda functions on OpenSearch; prompt-engineered the Anthropic Claude API for context-relevant responses.</li>
            </ul>
          </div>

          <div className="card" style={{ position: "relative", overflow: "hidden", padding: "var(--sp-4) var(--sp-4) var(--sp-4) calc(var(--sp-4) + 10px)" }}>
            <div className="exp-accent-bar" />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "var(--sp-1)", marginBottom: "var(--sp-2)" }}>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.125rem", letterSpacing: "var(--ls-tight)" }}>
                  SS Technology Consultants
                </h3>
                <p style={{ fontSize: "var(--text-caption)", color: "var(--color-accent)", margin: 0, fontWeight: 500 }}>
                  Full Stack Engineer Intern
                </p>
              </div>
              <span style={{ fontSize: "var(--text-caption)", color: "var(--color-text-3)", whiteSpace: "nowrap" }}>
                Dec 2023 – May 2024
              </span>
            </div>
            <ul className="bullet-list">
              <li>Led a team of interns to build a REST API with JIRA-managed agile sprints; built CI/CD pipelines using Docker, Kubernetes, Jenkins + Bitbucket, cutting deployment time by 30%.</li>
              <li>Designed a secure auth system with React, Express, Node.js, and MongoDB using JWT and Bcrypt — eliminating all major authentication vulnerabilities.</li>
              <li>Automated monitoring tasks in Linux/Unix with Bash scripting to reduce manual setup time.</li>
            </ul>
          </div>

        </div>
      </section>

      <hr className="divider" />

      {/* ════════════════════════════════════════ PROJECTS ════ */}
      <section>
        <SectionHeading eyebrow="Projects">Things I&apos;ve Built</SectionHeading>

        {/* Responsive grid: 1 col on mobile, 2 col on sm+ */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "var(--sp-2)",
        }}>
          <ProjectCard title="Common" description={["Innovative proximity-baserd social networking application to connect people nearby."]} stack="Flutter · Dart · Firebase"/>
          <ProjectCard title="Fabric" description={["Utilizing LangGraph, LLMs, A2A, MCP, RAG, and ADK to create a suite of AI Agents to optimize my daily tasks."]} stack="React · Electron · Python · FastAPI · Pydantic · ChromaDB"/>
          <ProjectCard title="DaVinci Learning Graph" description={["Innovating a novel way to understand, creating a neural map of everything you learn."]} stack=""/>
          <ProjectCard title="Chord Studio" description={["AI-powered music and chord generator, from thought to music in seconds."]} stack="Web Audio API · Next.js · Typescript · Tailwind CSS · OpenAI API"/>
          <ProjectCard title="Siblings or Dating" description={["CNN (MobileNetV2) using transfer learning to classify Reddit images as siblings or dating. Achieved 80% validation accuracy."]} stack="TensorFlow · Keras · Python · CNN · Django"/>
          <ProjectCard title="Akuna Capital Quant Challenge" description={["Python market-making framework integrating nonlinear optimization, stochastic modeling, and RL for adaptive market intelligence."]} stack="Python · RL · Nonlinear Optimization"/>
          <ProjectCard title="Poker Bot" description={["Monte Carlo counterfactual regret minimization to approximate Nash Equilibrium for 2-player Kuhn's poker."]} stack="Python" />
          <ProjectCard title="TenantTalk" description={["Web app for rating landlords and property management, built with a team of 6 using Scrum methodology."]} stack="Django · PostgreSQL · Heroku · AWS S3"/>
          <ProjectCard title="Coccidiosis Classification" description={["CNN to detect Coccidiosis in chicken images using 1,000+ labeled training images."]} stack="Python · TensorFlow · Azure"/>
          <ProjectCard title="Film Finder" description={["Recommendation system integrating the TMDB API across 5,000+ movies using scikit-learn."]} stack="Python · NumPy · scikit-learn · TMDB API"/>
          <ProjectCard title="EzCite" description={["Lead dev using React and Next.js. Integrated Perplexity LLM and Puppeteer for optimal citation generation."]} stack="React · Next.js · Node.js · JavaScript"/>
          <ProjectCard title="NLP Application" description={["End-to-end Named Entity Recognition app using Stanford CoreNLP to detect names, cities, states, and countries."]} stack="Java · Spring Boot"/>
          <ProjectCard title="European Option Pricing" description={["Monte Carlo simulation pricing model for European vanilla options using GBM and Box-Muller, matching Black-Scholes."]} stack="C++"/>
          <ProjectCard title="EDO.ai" description={["Researching and developing models to predict diabetes using extensive blood test data."]} stack="PyTorch"/>
        </div>
      </section>

    </section>
  );
};

export default Home;
