import dynamic from 'next/dynamic';
// Import the necessary modules
import { Metadata } from "next";
import "./globals.css";
import { H1 } from '@/components/ui/H1';
import { H2 } from '@/components/ui/H2';
import { H3 } from '@/components/ui/H3';
import { Bot } from "lucide-react";

// Declare the metadata
export const metadata: Metadata = {
  title: "Sanjay Karunamoorthy | My Portfolio",
  description: "Sanjay is a 3rd year Student at the University of Virginia.",
}

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string;
  dateRange: string;
}

// Define a reusable ProjectCard component
const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, stack, dateRange }) => (
  <div className="shadow-md p-6 rounded-lg">
    <h2 className="text-center text-lg font-semibold">{title}</h2>
    <p className="text-center text-white-600">{description}</p>
    <br />
    <p className="text-center text-white-500 mt-2">{stack}</p>
    <p className="text-center text-white-500 mt-2">{dateRange}</p>
  </div>
);


//Skills section
const SkillsSection = () => (
  <section className="space-y-8">
    <H2 className="text-center">Skills</H2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold mb-2 text-center">Languages</h3>
        <ul className="text-center"> {/* removed list-disc and pl-5*/}
          <li>Java</li>
          <li>Python</li>
          <li>C</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>SQLite</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
      </div>
      <div className="rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold mb-2 text-center">Technologies</h3>
        <ul className="text-center">
          <li>React</li>
          <li>Next.js</li>
          <li>TensorFlow</li>
          <li>PyTorch</li>
          <li>AWS (S3, EC2)</li>
          <li>Django</li>
          <li>MongoDB</li>
          <li>Express</li>
          <li>Git</li>
        </ul>
      </div>
    </div>
  </section>
);

// Define the Home component
const Home = () => {
  const TypeAnimation = dynamic(() => import('../components/typedAnimation'), { ssr: false });

  return (
    <section className="space-y-16 bg-cover bg-no-repeat px-1 py-8">
      <section className='grid grid-cols-1 items-center gap-8'>
        <div className="space-y-3 text-center">
          <H1>Sanjay Karunamoorthy</H1>

          <div className="container">
            <TypeAnimation />
          </div>
          <br /> <br /> <br />

          {/* <p className='text-center sm:text-start'> I&apos;m a 3rd year at UVA. I'm making this because I'm bored.
            I love problem solving and learning new things, like making this website.</p> */}
        </div>
      </section>

      <section className="space-y-3 text-center">
        <H2>Ask the chatbot anything you want about me</H2>
        <p>
          Click the little <Bot className="inline pb-1" /> icon in the top bar to activate
          the AI chat. 
        </p>
        <br /><br />
        <H2 className='display:flex; justify-content:center; align-items:center;'>ChatBot is Work in Progress.</H2>
        <br />
      </section>

      <br /><br /><br /> <br /> 

      <section className="space-y-16 bg-cover bg-no-repeat px-1 py-8">
            <div className="max-w-4xl mx-auto">
              <H1 className="text-center">About Me</H1>
              <br />
              <section className="text-center grid grid-cols-1 items-center gap-8">
                <div className="space-y-3">
                  <H2 className="text-center">Who am I?</H2>
                  <p className="text-center">
                    I&apos;m a 3rd year at UVA pursuing a B.S in Computer Science and B.A in Mathematics. I am passionate about solving problems
                    and learning different things.
                  </p>
                </div>
              </section>
              <br /><br />
              
              {/* Add the Skills Section */}
              <SkillsSection />
  
              {/* <div className="text-center">
                <Link href="/">Go back to Home</Link>
              </div> */}
            </div>
      </section>

      <section className="space-y-16 bg-cover bg-no-repeat px-1 py-8">
          <div className="max-w-4xl mx-auto">
            <H1 className="text-center">My Projects</H1>
            <br />
            {/* Rendering Project Cards */}
            <section className="grid grid-cols-2 gap-8">
                {/* Project 1 */}
                <ProjectCard
                title="TenantTalk"
                description="Built a web app for rating landlords and property management, adhering to Scrum methodology with a team of 5 other developers through sprints and weekly meetings."
                stack="Django, PostgreSQL, Heroku, AWS S3"
                dateRange="Jan 2024 – Present"
                />
                {/* Project 2 */}
                <ProjectCard
                title="Coccidiosis Classification"
                description="Constructed a Convolutional Neural Network (CNN) to detect Coccidiosis signs in chicken images, with the use of over 1000 labeled images."
                stack="Python, TensorFlow, Azure"
                dateRange="Jan 2024 – March 2024"
                />
                {/* Project 3 */}
                <ProjectCard
                title="Film Finder"
                description="Created using Python and Jupyter Notebook with libraries like Numpy, sci-kit-learn, pickle, and requests. Integrated TMDB API for data retrieval, including plot summaries, genres, and ratings from over 5000 movies."
                stack="Python, TensorFlow"
                dateRange="Sept 2023 – Dec 2023"
                />

                <ProjectCard
                title="EzCite"
                description="Lead developer of the website, utilizing React and Next.js. Leveraged a mix of the Perplexity LLM and Node.js modules such as discord.js and Puppeteer and the use of citation-machine to create optimal citations from an input of text."
                stack="React, Next.js, Node.js, JavaScript, HTML, CSS"
                dateRange="Mar 2024 – Mar 2024"
                />

                <ProjectCard
                title="Natural Language Processing Application"
                description="Detects names, cities, states, and countries from given sentences. End-to-end development of a robust NER application leveraging the Stanford CoreNLP."
                stack="Java, Spring Boot"
                dateRange="Nov 2023 – Dec 2023"
                />


            </section>
            <br /><br />
            {/* <div className="text-center">
              <Link href="/">Go back to Home</Link>
            </div> */}
          </div>
        </section>

    </section>
  );
};

// Export the Home component as the default export
export default Home;
