import Link from "next/link";
import { H1 } from '@/components/ui/H1';
import { H2 } from '@/components/ui/H2';
import "../app/globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

interface ProjectCardProps {
    title: string;
    description: string[];
    stack: string;
    dateRange: string;
}

// Define a reusable ProjectCard component
const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, stack, dateRange }) => (
    <div className="shadow-md p-6 rounded-lg">
        <h2 className="text-lg font-semibold">{title}</h2>
        <ul className="text-white-600 list-disc">
            {description.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <p className="text-white-500 mt-2">{stack}</p>
        <p className="text-white-500 mt-2">{dateRange}</p>
    </div>
);

export default function Projects() {
    return (
        <ThemeProvider attribute="class">
            <div>
                <Navbar />
            </div>

            <main className="mx-auto max-w-3xl px-3 py-10">
                <section className="space-y-16 bg-cover bg-no-repeat px-1 py-8">
                    <div className="max-w-4xl mx-auto">
                        <H1 className="text-center">My Projects</H1>
                        <br />
                        {/* Rendering Project Cards */}
                        <section className="grid grid-cols-2 gap-8">
                            {/* Project 1 */}
                            <ProjectCard
                                title="SK-GPT"
                                description={[
                                    "Implemented ChatGPT from scratch using neural networks with custom backpropagation and gradient descent algorithms."
                                ]}
                                stack="TensorFlow, Python, Neural Networks"
                                dateRange="May 2025 – Present"
                            />

                            <ProjectCard
                                title="Siblings or Dating – Facial Recognition"
                                description={[
                                    "Created a Convolutional Neural Network (MobileNetV2) using transfer learning to classify preprocessed images scraped from Reddit via PRAW.",
                                    "Achieved 80% validation accuracy distinguishing couples as either siblings or dating through hyperparameter tuning."
                                ]}
                                stack="TensorFlow, Keras, Python, CNN, Django"
                                dateRange="March 2025"
                            />


                            <ProjectCard
                                title="Akuna Capital Quant Trading Challenge"
                                description={[
                                    "Pioneered a python-based market making quantitative trading framework integrating nonlinear optimization and stochastic modeling.",
                                    "Implemented reinforcement learning to dynamically synthesize adaptive market intelligence. "
                                ]}
                                stack="Python, Reinforcement Learning, Nonlinear Optimization"
                                dateRange="August 2024"
                            />

                            <ProjectCard
                                title="Poker Bot"
                                description={[
                                    "Used a Monte Carlo counterfactual regret minimization algorithm to approximate a Nash Equillibrium strategy for a 2-player Khun's poker game."
                                ]}
                                stack="Python"
                                dateRange="June 2024 – July 2024"
                            />

                            <ProjectCard
                                title="TenantTalk"
                                description={[
                                    "Built a web app for rating landlords and property management, adhering to Scrum methodology with a team of 5 other developers through sprints and weekly meetings."
                                ]}
                                stack="Django, PostgreSQL, Heroku, AWS S3"
                                dateRange="Jan 2024 – Present"
                            />

                            <ProjectCard
                                title="Coccidiosis Classification"
                                description={[
                                    "Constructed a Convolutional Neural Network (CNN) to detect Coccidiosis signs in chicken images, with the use of over 1000 labeled images."
                                ]}
                                stack="Python, TensorFlow, Azure"
                                dateRange="Jan 2024 – March 2024"
                            />

                            <ProjectCard
                                title="Film Finder"
                                description={[
                                    "Created using Python and Jupyter Notebook with libraries like Numpy, sci-kit-learn, pickle, and requests.",
                                    "Integrated TMDB API for data retrieval, including plot summaries, genres, and ratings from over 5000 movies."
                                ]}
                                stack="Python, TensorFlow"
                                dateRange="Sept 2023 – Dec 2023"
                            />

                            <ProjectCard
                                title="EzCite"
                                description={[
                                    "Lead developer of the website, utilizing React and Next.js.",
                                    "Leveraged a mix of the Perplexity LLM and Node.js modules such as discord.js and Puppeteer.",
                                    "Use of citation-machine to create optimal citations from an input of text."
                                ]}
                                stack="React, Next.js, Node.js, JavaScript, HTML, CSS"
                                dateRange="Mar 2024 – Mar 2024"
                            />

                            <ProjectCard
                                title="Natural Language Processing Application"
                                description={[
                                    "Detects names, cities, states, and countries from given sentences.",
                                    "End-to-end development of a robust NER application leveraging the Stanford CoreNLP."
                                ]}
                                stack="Java, Spring Boot"
                                dateRange="Nov 2023 – Dec 2023"
                            />
                            
                            <ProjectCard
                                title="European Option Pricing"
                                description={[
                                    "Developed a Monte Carlo simulation-based pricing model for European vanilla options in C++" +  
                                    "using risk-neutral pricing, Geometric Brownian Motion, and the Box-Muller algorithm, achieving" 
                                    + "results closely matching Black-Scholes solutions."
                                ]}
                                stack="C++"
                                dateRange="May 2024 – June 2024"
                            />
                        
                            <ProjectCard
                                title="EDO.ai"
                                description={[
                                    "Developing and researching models to predict diabetes using extensive blood test data and other methods."
                                ]}
                                stack="PyTorch"
                                dateRange="August 2024 – Present"
                            />


                            
                        </section>
                        <br /><br />
                        {/* <div className="text-center">
              <Link href="/">Go back to Home</Link>
            </div> */}
                    </div>
                </section>
            </main>
            <br /> <br /> <br />
            <div>
                <Footer />
            </div>
        </ThemeProvider>
    );
}
