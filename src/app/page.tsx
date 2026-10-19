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
        <p style={{ fontSize: "var(--text-body)", lineHeight: "var(--lh-body)", color: "var(--color-text-2)", maxWidth: "58ch" }}>
          I&apos;m a University of Virginia graduate with a B.S. in Computer Science and a minor in Data Science. I enjoy building reliable software, data-intensive systems, and practical AI applications.
        </p>
        <div style={{ marginTop: "var(--sp-5)" }}>
          <span className="eyebrow">Skills</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "var(--sp-2)", marginTop: "var(--sp-2)" }}>
            {[
              { heading: "Languages", skills: "Python · Java · SQL · C++ · JavaScript · TypeScript · HTML · CSS" },
              { heading: "Backend & Databases", skills: "Spring Boot · Django · Node.js · PostgreSQL · Redis · Firebase · Supabase" },
              { heading: "Cloud & Infrastructure", skills: "AWS Lambda · Batch · ECS · S3 · SQS · SNS · Terraform · Docker · Kafka · Airflow" },
              { heading: "Tools & AI/ML", skills: "Git · JUnit · Mockito · Postman · Pandas · LLMs · RAG · Agentic AI" },
            ].map(({ heading, skills }) => (
              <div key={heading} className="card" style={{ padding: "var(--sp-3)" }}>
                <p style={{ fontSize: "var(--text-caption)", fontWeight: 500, letterSpacing: "var(--ls-wide)", textTransform: "uppercase", color: "var(--color-text-3)", marginBottom: "var(--sp-2)" }}>{heading}</p>
                <p style={{ fontSize: "var(--text-caption)", lineHeight: 1.7, color: "var(--color-text-2)", margin: 0 }}>{skills}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ════════════════════════════════════════ EDUCATION ══ */}
      <section>
        <SectionHeading eyebrow="Education">University of Virginia</SectionHeading>
        <div className="card" style={{ padding: "var(--sp-4)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "var(--sp-1)" }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.125rem", letterSpacing: "var(--ls-tight)" }}>School of Engineering</h3>
              <p style={{ color: "var(--color-text-2)", margin: "var(--sp-1) 0 0" }}>B.S. in Computer Science, Minor in Data Science</p>
            </div>
            <span style={{ fontSize: "var(--text-caption)", color: "var(--color-text-3)" }}>Charlottesville, VA · May 2026</span>
          </div>
          <p style={{ fontSize: "var(--text-caption)", color: "var(--color-text-3)", marginBottom: 0 }}>GPA: 3.8</p>
        </div>
        <p style={{ marginTop: "var(--sp-2)", fontSize: "var(--text-caption)", color: "var(--color-text-3)" }}>Certification: AWS Certified Cloud Practitioner</p>
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
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.125rem", letterSpacing: "var(--ls-tight)" }}>Fannie Mae</h3>
                <p style={{ fontSize: "var(--text-caption)", color: "var(--color-accent)", margin: 0, fontWeight: 500 }}>Software Engineer</p>
              </div>
              <span style={{ fontSize: "var(--text-caption)", color: "var(--color-text-3)", whiteSpace: "nowrap" }}>Jul 2026 – Present</span>
            </div>
            <ul className="bullet-list">
              <li>Reduced event-processing latency in a production ETL pipeline by 38% by migrating XML payload splitting from ECS/AWS Batch to AWS Lambda, eliminating approximately 60 seconds of startup overhead and enabling parallel execution.</li>
              <li>Developing Python- and SQL-based reconciliation and exception-handling logic for an AWS Aurora-backed loan-processing pipeline, validating record completeness and detecting partial data loss across downstream services.</li>
            </ul>
          </div>

          <div className="card" style={{ position: "relative", overflow: "hidden", padding: "var(--sp-4) var(--sp-4) var(--sp-4) calc(var(--sp-4) + 10px)" }}>
            <div className="exp-accent-bar" />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "var(--sp-1)", marginBottom: "var(--sp-2)" }}>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.125rem", letterSpacing: "var(--ls-tight)" }}>GEICO</h3>
                <p style={{ fontSize: "var(--text-caption)", color: "var(--color-accent)", margin: 0, fontWeight: 500 }}>Software Development Intern</p>
              </div>
              <span style={{ fontSize: "var(--text-caption)", color: "var(--color-text-3)", whiteSpace: "nowrap" }}>Jun 2025 – Aug 2025</span>
            </div>
            <ul className="bullet-list">
              <li>Led development of a phase-gated PDLC system for project intake, including LLM-drafted PRDs and risk scores; projected to save $158K annually and deployed to AKS with Terraform and Azure Pipelines CI/CD.</li>
              <li>Architected a Redis cache-aside layer that reduced search latency by 88% (approximately 500 ms to under 60 ms); used Prometheus to identify bottlenecks and decoupled Azure DevOps ticket creation with RabbitMQ to cut product-creation latency by 23%.</li>
              <li>Delivered a GraphQL and pandas automation pipeline to analyze DORA metrics across 17,000+ repositories, identify 2,000+ system owners, and automate targeted email notifications.</li>
            </ul>
          </div>

          <div className="card" style={{ position: "relative", overflow: "hidden", padding: "var(--sp-4) var(--sp-4) var(--sp-4) calc(var(--sp-4) + 10px)" }}>
            <div className="exp-accent-bar" />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "var(--sp-1)", marginBottom: "var(--sp-2)" }}>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.125rem", letterSpacing: "var(--ls-tight)" }}>SS Technology Consultants Inc</h3>
                <p style={{ fontSize: "var(--text-caption)", color: "var(--color-accent)", margin: 0, fontWeight: 500 }}>Software Engineer Intern</p>
              </div>
              <span style={{ fontSize: "var(--text-caption)", color: "var(--color-text-3)", whiteSpace: "nowrap" }}>May 2024 – Jul 2024</span>
            </div>
            <ul className="bullet-list">
              <li>Improved Spring Batch runtime by 6% for a search-data pipeline handling 2M+ records by eliminating redundant transformations in a Kafka and Airflow workflow.</li>
              <li>Integrated Claude API into a RAG pipeline using AWS Bedrock Titan embeddings and OpenSearch kNN retrieval, engineering prompts and API payloads for context-grounded responses.</li>
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
          <ProjectCard title="Curiosity" description={["Innovating a novel way to understand, creating a neural map of everything you learn."]} stack="Swift"/>
          <ProjectCard title="Common" description={["Innovative proximity-based social networking application to connect like-minded people."]} stack="Flutter · Dart · Firebase"/>
          <ProjectCard title="Fabric" description={["Utilizing LangGraph, LLMs, A2A, MCP, RAG, and ADK to create a suite of AI Agents to optimize my daily tasks."]} stack="React · Electron · Python · FastAPI · Pydantic · ChromaDB"/>
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
