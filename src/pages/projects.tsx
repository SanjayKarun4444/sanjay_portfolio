import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import "../app/globals.css";

interface ProjectCardProps {
  title: string;
  description: string[];
  stack: string;
  dateRange: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, stack, dateRange }) => (
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
        {description.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
    <div style={{
      marginTop: "var(--sp-3)",
      paddingTop: "var(--sp-2)",
      borderTop: "1px solid var(--color-border)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "wrap",
      gap: "var(--sp-1)",
    }}>
      <p style={{ fontSize: "var(--text-caption)", color: "var(--color-text-3)", margin: 0, lineHeight: 1.5 }}>
        {stack}
      </p>
      <span style={{
        fontSize: "var(--text-caption)",
        fontWeight: 500,
        color: "var(--color-accent)",
        whiteSpace: "nowrap",
      }}>
        {dateRange}
      </span>
    </div>
  </div>
);

const PROJECTS: ProjectCardProps[] = [
  { title: "Micrograd", description: ["Implementing backpropagation over a dynamically built DAG and building a neural network from scratch."], stack: "Python · Neural Networks · Backprop", dateRange: "Aug 2025 – Present" },
  { title: "SK-GPT", description: ["Implemented ChatGPT from scratch with custom backpropagation and gradient descent algorithms."], stack: "TensorFlow · Python · Neural Networks", dateRange: "Aug 2025 – Present" },
  { title: "Siblings or Dating", description: ["CNN (MobileNetV2) using transfer learning to classify Reddit images as siblings or dating. 80% validation accuracy."], stack: "TensorFlow · Keras · Python · Django", dateRange: "Mar 2025" },
  { title: "Akuna Capital Quant Challenge", description: ["Python market-making framework integrating nonlinear optimization, stochastic modeling, and RL."], stack: "Python · RL · Nonlinear Optimization", dateRange: "Aug 2024" },
  { title: "Poker Bot", description: ["Monte Carlo counterfactual regret minimization to approximate Nash Equilibrium for 2-player Kuhn's poker."], stack: "Python", dateRange: "Jun – Jul 2024" },
  { title: "TenantTalk", description: ["Web app for rating landlords and property management, built with a team of 6 via Scrum."], stack: "Django · PostgreSQL · Heroku · AWS S3", dateRange: "Jan 2024 – Present" },
  { title: "Coccidiosis Classification", description: ["CNN to detect Coccidiosis in chicken images using 1,000+ labeled training images."], stack: "Python · TensorFlow · Azure", dateRange: "Jan – Mar 2024" },
  { title: "Film Finder", description: ["Recommendation system integrating the TMDB API across 5,000+ movies using scikit-learn."], stack: "Python · NumPy · scikit-learn", dateRange: "Sep – Dec 2023" },
  { title: "EzCite", description: ["Lead dev using React and Next.js. Integrated Perplexity LLM and Puppeteer for citation generation."], stack: "React · Next.js · Node.js", dateRange: "Mar 2024" },
  { title: "NLP Application", description: ["End-to-end Named Entity Recognition using Stanford CoreNLP to detect names, cities, states, and countries."], stack: "Java · Spring Boot", dateRange: "Nov – Dec 2023" },
  { title: "European Option Pricing", description: ["Monte Carlo simulation pricing model for European vanilla options using GBM and Box-Muller, matching Black-Scholes."], stack: "C++", dateRange: "May – Jun 2024" },
  { title: "EDO.ai", description: ["Researching and developing models to predict diabetes using extensive blood test data."], stack: "PyTorch", dateRange: "Aug 2024 – Present" },
];

export default function Projects() {
  return (
    <ThemeProvider attribute="class">
      <Navbar />

      <main className="mx-auto max-w-3xl px-4 py-10">
        <section style={{ paddingBottom: "var(--sp-12)" }}>

          <div style={{ paddingTop: "var(--sp-8)", paddingBottom: "var(--sp-8)" }}>
            <span className="eyebrow">Projects</span>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-hero)",
              fontWeight: 600,
              letterSpacing: "var(--ls-tight)",
              lineHeight: "var(--lh-hero)",
              color: "var(--color-text-1)",
              marginTop: "var(--sp-2)",
            }}>
              Things I&apos;ve Built
            </h1>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "var(--sp-2)",
          }}>
            {PROJECTS.map(p => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>

        </section>
      </main>

      <Footer />
    </ThemeProvider>
  );
}
