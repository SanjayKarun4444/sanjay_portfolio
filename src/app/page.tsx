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
  description: string[];
  stack: string;
  dateRange: string;
}

// Define a reusable ProjectCard component
const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, stack, dateRange }) => (
  <div className="shadow-md p-6 rounded-lg flex flex-col justify-between">
    <div>
      <h2 className="text-lg font-semibold text-center">{title}</h2>
      <br/>
      <ul className="text-white-600 list-lower-roman" style={{ listStyleType: 'square' }}>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    <br />
    <div>
      <p className="text-white-500 mt-2 text-center">{stack}</p>
      <p className="text-white-500 mt-2 text-center">{dateRange}</p>
    </div>
  </div>
);


//Skills section
const SkillsSection = () => (
  <section className="space-y-8">
    <H2 className="text-center">Skills</H2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold mb-2 text-center">Languages</h3>
        <ul className="text-center">
          <li className="about-module_skillItem">Java</li>
          <li className="about-module_skillItem">Python</li>
          <li className="about-module_skillItem">C</li>
          <li className="about-module_skillItem">JavaScript</li>
          <li className="about-module_skillItem">Node.js</li>
          <li className="about-module_skillItem">SQLite</li>
          <li className="about-module_skillItem">CSS</li>
          <li className="about-module_skillItem">HTML</li>
        </ul>
      </div>
      <div className="rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold mb-2 text-center">Technologies</h3>
        <ul className="text-center">
          <li className="about-module_skillItem">React</li>
          <li className="about-module_skillItem">Next.js</li>
          <li className="about-module_skillItem">TensorFlow</li>
          <li className="about-module_skillItem">PyTorch</li>
          <li className="about-module_skillItem">AWS (S3, EC2)</li>
          <li className="about-module_skillItem">Django</li>
          <li className="about-module_skillItem">MongoDB</li>
          <li className="about-module_skillItem">Express</li>
          <li className="about-module_skillItem">Git</li>
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
        {/* <H2 className='display:flex; justify-content:center; align-items:center;'>ChatBot is Work in Progress.</H2> */}
        <br />
      </section>

      <br /><br />

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
      
      {/* start here */}
      <section className="space-y-16 bg-cover bg-no-repeat px-1 py-8">
        <div className="max-w-4xl mx-auto">
          <H1 className="text-center">Experience</H1>
          <br />
          {/* Experience Section */}
          <section className="grid grid-cols-1 gap-8">
            {/* <div className="shadow-md p-6 rounded-lg">
              <h2 className="text-center text-lg font-semibold">Software Engineering Intern</h2>
              <p className="text-center text-white-600"></p>
              <p className="text-center text-white-500 mt-2">May 2024 – Present</p>
              <br />
              <ul className="text-white-500 list-disc">
                <li>Assigned to develop code to seamlessly read and parse through a Salesforce dataset to use on elastic search enterprise micro-service project</li>
                <li>Crafted an efficient and robust data processing solution leveraging Spring Boot and Spring Batch, adeptly handling over 2,000,000 user data points.</li>
              </ul>
            </div> */}
            {/* Work Experience 1 */}
            <div className="shadow-md p-6 rounded-lg">
              <h2 className="text-center text-lg font-semibold">Software Engineer Intern</h2>
              <p className="text-center text-white-600">In progress</p>
              <p className="text-center text-white-500 mt-2">May 2024 – Present</p>
              <br />
              <ul className="text-white-500 list-disc">
                <li>Preprocessing data, vectorizing for semantic search for RAG.</li>
              </ul>
            </div>

            <div className="shadow-md p-6 rounded-lg">
              <h2 className="text-center text-lg font-semibold">ML Engineer</h2>
              <p className="text-center text-white-600">HBDO, Washington, D.C</p>
              <p className="text-center text-white-500 mt-2">February 2024 – March 2024</p>
              <br />
              <ul className="text-white-500 list-disc">
                <li>Head of the development of a cutting-edge Scalar Vector Machine (SVM) model to classify and detect potential cases of diabetes using extensive blood test data from a cohort of 700+ individuals.</li>
              </ul>
            </div> 
            
            {/* Work Experience 2 */}
            <div className="shadow-md p-6 rounded-lg">
              <h2 className="text-center text-lg font-semibold">Full Stack SWE Intern</h2>
              <p className="text-center text-white-600">SS Technology Consultants, Reston, VA</p>
              <p className="text-center text-white-500 mt-2">December 2023 – May 2024</p>
              <br />
              <ul className="text-white-500 list-disc">
                <li>Tech Lead for a group of interns, leading weekly meetings, ensuring alignment with sprint goals while facilitating seamless communication.</li>
                <li>Designed and implemented a secure back-end Authentication System with the MERN stack (MongoDB, Express, React, NodeJS). Exercising JWT and Bcrypt to increase overall security by over 60% based on pen-testing results.</li>
                <li>Employed RESTful API endpoints for Registration, Login, and Sign-out functionalities, and Postman for development and testing.</li>
                <li>Integrating hosting with Render to augment scalability, emphasizing production and application architecture principles.</li>
              </ul>
            </div>

            {/* Work Experience 3 */}
            <div className="shadow-md p-6 rounded-lg">
              <h2 className="text-center text-lg font-semibold">Web Development Intern</h2>
              <p className="text-center text-white-600">SS Technology Consultants, Reston, VA</p>
              <p className="text-center text-white-500 mt-2">May 2023 - August 2023</p>
              <br />
              <ul className="text-white-500 list-disc">
                <li>Led the transformation of the company website utilizing React, adhering to MVC architecture and Scrum methodology; collaborated closely with senior team members for mentorship and guidance to ensure successful project completion</li>
                <li>Learned about UI/UX design principles, responsive web design, and performance optimization techniques.</li>
              </ul>
            </div>


          </section>
          <br /><br />
        </div>
      </section>
      {/* end here */}
      
      {/* Projects start here */}
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
                    title="Poker Bot"
                    description={[
                        "Used a Monte Carlo counterfactual regret minimization algorithm to develop a 2-player Texas hold’em poker bot"
                    ]}
                    stack="F#, JavaScript, Python"
                    dateRange="June 2024 – Present"
                />
                
            </section>
            <br /><br />
            {/* <div className="text-center">
              <Link href="/">Go back to Home</Link>
            </div> */}
          </div>
        </section>
        {/* Project ends here */}

    </section>
  );
};

// Export the Home component as the default export
export default Home;
