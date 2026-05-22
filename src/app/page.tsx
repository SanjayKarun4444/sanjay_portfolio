"use client";

import dynamic from "next/dynamic";
import { Metadata } from "next";
import { Bot } from "lucide-react";

/* ── Sub-components ────────────────────────────── */

interface ProjectCardProps {
  title: string;
  description: string[];
  stack: string;
  dateRange: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, stack, dateRange }) => (
  <div className="card p-5 flex flex-col justify-between h-full">
    <div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1rem",
          fontWeight: 700,
          marginBottom: "0.75rem",
          background: "var(--grad-text)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {title}
      </h3>
      <ul className="project-list">
        {description.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
    <div style={{ marginTop: "1rem", borderTop: "1px solid var(--border-subtle)", paddingTop: "0.75rem" }}>
      <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>{stack}</p>
      <span
        style={{
          fontSize: "0.7rem",
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          padding: "2px 8px",
          borderRadius: "100px",
          background: "rgba(56,189,248,0.08)",
          border: "1px solid rgba(56,189,248,0.15)",
          color: "var(--accent-3)",
        }}
      >
        {dateRange}
      </span>
    </div>
  </div>
);

const SkillsSection = () => (
  <section style={{ marginTop: "2.5rem" }}>
    <SectionLabel>Skills</SectionLabel>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginTop: "1.25rem" }}>
      <div className="card p-5">
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1rem" }}>
          Languages
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {["Java","Python","C","JavaScript","TypeScript","HTML + CSS","SQL"].map(s => (
            <span key={s} className="about-module_skillItem">{s}</span>
          ))}
        </div>
      </div>
      <div className="card p-5">
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1rem" }}>
          Technologies
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {["Spring","Django","React","OpenSearch","Next.js","Node.js","PyTorch","MongoDB","Express","Kafka","Git","REST API"].map(s => (
            <span key={s} className="about-module_skillItem">{s}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* Small section eyebrow label */
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p style={{
    fontFamily: "var(--font-display)",
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--accent-1)",
    marginBottom: "0.5rem",
  }}>
    {children}
  </p>
);

/* Gradient heading */
const BigHeading = ({ children, sub }: { children: React.ReactNode; sub?: string }) => (
  <div style={{ marginBottom: "2rem" }}>
    {sub && <SectionLabel>{sub}</SectionLabel>}
    <h2
      style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
        fontWeight: 800,
        background: "var(--grad-text)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        lineHeight: 1.2,
      }}
    >
      {children}
    </h2>
  </div>
);

/* Horizontal rule */
const Rule = () => (
  <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, var(--border-mid), transparent)", margin: "4rem 0" }} />
);

/* ── Page ──────────────────────────────────────── */
const Home = () => {
  const TypeAnimation = dynamic(() => import("../components/typedAnimation"), { ssr: false });

  return (
    <section style={{ paddingBottom: "5rem" }}>

      {/* ── Hero ── */}
      <section style={{ paddingTop: "3rem", paddingBottom: "4rem", textAlign: "center" }}>
        <p style={{
          fontFamily: "var(--font-display)",
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--accent-3)",
          marginBottom: "1rem",
        }}>
          Computer Science × Data Science — UVA
        </p>

        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 6vw, 3.5rem)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          background: "linear-gradient(135deg, #f0f4ff 30%, #a78bfa 70%, #38bdf8 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          marginBottom: "1.5rem",
          wordBreak: "break-word",
          overflowWrap: "break-word",
        }}>
          Sanjay<br />Karunamoorthy
        </h1>

        <div style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "2rem" }}>
          <TypeAnimation />
        </div>

        {/* Chatbot nudge */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.6rem 1.25rem",
          borderRadius: "100px",
          background: "rgba(108,99,255,0.1)",
          border: "1px solid rgba(108,99,255,0.2)",
          fontSize: "0.875rem",
          color: "var(--text-secondary)",
        }}>
          <Bot size={16} style={{ color: "var(--accent-1)" }} />
          Click the <Bot size={14} style={{ display: "inline", verticalAlign: "middle", color: "var(--accent-2)" }} /> icon above to ask me anything
        </div>

        <p style={{ marginTop: "1rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
          If the chatbot errors, email <a href="mailto:sanjaykarun@gmail.com">sanjaykarun@gmail.com</a> to wake up AstraDB.
        </p>
      </section>

      <Rule />

      {/* ── About ── */}
      <section>
        <BigHeading sub="About me">Who I Am</BigHeading>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-secondary)", maxWidth: "58ch" }}>
          I&apos;m a 4th year at UVA pursuing a B.S in Computer Science with a Minor in Data Science,
          expected Spring 2026. I&apos;m passionate about solving hard problems and building things that matter —
          whether that&apos;s production infrastructure, ML systems, or anything in between.
        </p>
        <SkillsSection />
      </section>

      <Rule />

      {/* ── Experience ── */}
      <section>
        <BigHeading sub="Experience">Where I&apos;ve Worked</BigHeading>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

          {/* UVA Research */}
          <div className="card p-6" style={{ position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "100%", background: "var(--grad-primary)", borderRadius: "20px 0 0 20px" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem" }}>University of Virginia</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--accent-2)", margin: 0 }}>Undergraduate AI Researcher</p>
              </div>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", whiteSpace: "nowrap" }}>Aug 2025 – Present</span>
            </div>
            <ul className="custom-list">
              <li>Training Reinforcement Learning agents to collaborate with humans to improve task performance using Proximal Policy Optimization. Conducting experiments in multi-agent settings to analyze cooperation, incentives, and emergent behaviors.</li>
            </ul>
          </div>

          {/* GEICO */}
          <div className="card p-6" style={{ position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "100%", background: "var(--grad-warm)", borderRadius: "20px 0 0 20px" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem" }}>GEICO</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--accent-warm)", margin: 0 }}>Software Development Intern</p>
              </div>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", whiteSpace: "nowrap" }}>Jun 2025 – Aug 2025</span>
            </div>
            <ul className="custom-list">
              <li>Pioneered an MVP dashboard for a Project Development Life Cycle management system based on Shift Left methodology; built a REST API with Django, PostgreSQL, TypeScript, and React — scoped to benefit 3,000+ engineers.</li>
              <li>Partnered with 15+ Senior Directors, VPs, PMs, and SMEs to design a workflow optimization system with JSON integration, Redis caching, GraphQL, and Azure DevOps/Slack automation.</li>
              <li>Implemented bidirectional synchronization and timed reloads to prevent race conditions.</li>
              <li>Engineered an email automation script by pre-processing 17,000+ repos to reach 2,000+ system owners; used Power BI, Excel, and pandas for data organization and delivery.</li>
            </ul>
          </div>

          {/* SS Technology Consultants */}
          <div className="card p-6" style={{ position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "100%", background: "linear-gradient(180deg, #38bdf8, #6c63ff)", borderRadius: "20px 0 0 20px" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem" }}>SS Technology Consultants</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--accent-3)", margin: 0 }}>Software Engineer Intern</p>
              </div>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", whiteSpace: "nowrap" }}>May 2024 – Jul 2024</span>
            </div>
            <ul className="custom-list">
              <li>Built an efficient data processing solution using Spring Boot and Spring Batch on a 3M Project, handling 2M+ search data points from Salesforce and SharePoint.</li>
              <li>Optimized big data pipelines with Apache Airflow and Kafka, achieving a 6% improvement in semantic search processing efficiency.</li>
              <li>Leveraged Amazon Bedrock + Titan Text Embeddings for NLP and vectorized search for RAG.</li>
              <li>Implemented kNN vectors (k=5) with lambda functions on OpenSearch; prompt-engineered the Anthropic Claude API for context-relevant responses.</li>
            </ul>
          </div>

          {/* SS Technology Consultants*/}
          <div className="card p-6" style={{ position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "100%", background: "linear-gradient(180deg, #a78bfa, #6c63ff)", borderRadius: "20px 0 0 20px" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem" }}>SS Technology Consultants</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--accent-2)", margin: 0 }}>Full Stack Engineer Intern</p>
              </div>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", whiteSpace: "nowrap" }}>Dec 2023 – May 2024</span>
            </div>
            <ul className="custom-list">
              <li>Led a team of interns to build a REST API with JIRA-managed agile sprints; built CI/CD pipelines using Docker, Kubernetes, Jenkins + Bitbucket, cutting deployment time by 30%.</li>
              <li>Designed a secure auth system with React, Express, Node.js, and MongoDB using JWT and Bcrypt — eliminating all major authentication vulnerabilities.</li>
              <li>Automated monitoring tasks in Linux/Unix with Bash scripting to reduce manual setup time.</li>
            </ul>
          </div>

        </div>
      </section>

      <Rule />

      {/* ── Projects ── */}
      <section>
        <BigHeading sub="Projects">Things I&apos;ve Built</BigHeading>

        <div className="grid grid-cols-2 gap-4">
          <ProjectCard title="Micrograd" description={["Implementing backpropagation over a dynamically built DAG and building a neural network from scratch."]} stack="Python · Neural Networks · Backprop · Gradient Descent" dateRange="Aug 2025 – Present" />
          <ProjectCard title="SK-GPT" description={["Implemented ChatGPT from scratch with custom backpropagation and gradient descent algorithms."]} stack="TensorFlow · Python · Neural Networks" dateRange="Aug 2025 – Present" />
          <ProjectCard title="Siblings or Dating" description={["CNN (MobileNetV2) using transfer learning to classify Reddit images as siblings or dating. Achieved 80% validation accuracy."]} stack="TensorFlow · Keras · Python · CNN · Django" dateRange="Mar 2025" />
          <ProjectCard title="Akuna Capital Quant Challenge" description={["Python market-making framework integrating nonlinear optimization, stochastic modeling, and RL for adaptive market intelligence."]} stack="Python · RL · Nonlinear Optimization" dateRange="Aug 2024" />
          <ProjectCard title="Poker Bot" description={["Monte Carlo counterfactual regret minimization to approximate Nash Equilibrium for 2-player Kuhn's poker."]} stack="Python" dateRange="Jun – Jul 2024" />
          <ProjectCard title="TenantTalk" description={["Web app for rating landlords and property management, built with a team of 6 using Scrum methodology."]} stack="Django · PostgreSQL · Heroku · AWS S3" dateRange="Jan 2024 – Present" />
          <ProjectCard title="Coccidiosis Classification" description={["CNN to detect Coccidiosis in chicken images using 1,000+ labeled training images."]} stack="Python · TensorFlow · Azure" dateRange="Jan – Mar 2024" />
          <ProjectCard title="Film Finder" description={["Recommendation system integrating the TMDB API across 5,000+ movies using scikit-learn."]} stack="Python · NumPy · scikit-learn · TMDB API" dateRange="Sep – Dec 2023" />
          <ProjectCard title="EzCite" description={["Lead dev using React and Next.js. Integrated Perplexity LLM and Puppeteer for optimal citation generation."]} stack="React · Next.js · Node.js · JavaScript" dateRange="Mar 2024" />
          <ProjectCard title="NLP Application" description={["End-to-end Named Entity Recognition app using Stanford CoreNLP to detect names, cities, states, and countries."]} stack="Java · Spring Boot" dateRange="Nov – Dec 2023" />
          <ProjectCard title="European Option Pricing" description={["Monte Carlo simulation pricing model for European vanilla options using GBM and Box-Muller, matching Black-Scholes."]} stack="C++" dateRange="May – Jun 2024" />
          <ProjectCard title="EDO.ai" description={["Researching and developing models to predict diabetes using extensive blood test data."]} stack="PyTorch" dateRange="Aug 2024 – Present" />
        </div>
      </section>

    </section>
  );
};

export default Home;