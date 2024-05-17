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
                                title="TenantTalk"
                                description={[
                                    "Built a web app for rating landlords and property management, adhering to Scrum methodology with a team of 5 other developers through sprints and weekly meetings."
                                ]}
                                stack="Django, PostgreSQL, Heroku, AWS S3"
                                dateRange="Jan 2024 – Present"
                            />
                            {/* Project 2 */}
                            <ProjectCard
                                title="Coccidiosis Classification"
                                description={[
                                    "Constructed a Convolutional Neural Network (CNN) to detect Coccidiosis signs in chicken images, with the use of over 1000 labeled images."
                                ]}
                                stack="Python, TensorFlow, Azure"
                                dateRange="Jan 2024 – March 2024"
                            />
                            {/* Project 3 */}
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
                                title="My Portfolio"
                                description={[
                                    "Made this website and chatbot."
                                ]}
                                stack="Next.js 14, Langchain, OpenAI API, AstraDB, Tailwind CSS"
                                dateRange="Mar 2023 – Present"
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
