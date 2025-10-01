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
  description: "Sanjay is a 4th year at UVA, passionate about solving problems and learning anything cool",
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
      <ul className="text-white-600 list-lower-roman project-list">
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
          <li className="about-module_skillItem">Typescript</li>
          <li className="about-module_skillItem">HTML + CSS</li>
          <li className="about-module_skillItem">SQL</li>

        </ul>
      </div>
      <div className="rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold mb-2 text-center">Technologies/Frameworks</h3>
        <ul className="text-center columns-2">
          <li className="about-module_skillItem">Spring</li>
          <li className="about-module_skillItem">Django</li>
          <li className="about-module_skillItem">React</li>
          <li className="about-module_skillItem">OpenSearch</li>
          {/* <li className="about-module_skillItem">Solr</li> */}
          <li className="about-module_skillItem">Next.js</li>
          <li className="about-module_skillItem">Node.js</li>
          {/* <li className="about-module_skillItem">TensorFlow</li> */}
          <li className="about-module_skillItem">PyTorch</li>
          <li className="about-module_skillItem">MongoDB</li>
          <li className="about-module_skillItem">Express</li>
          <li className="about-module_skillItem">Kafka</li>
          <li className="about-module_skillItem">Git</li>
          <li className="about-module_skillItem">REST API</li>
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
          <br />
        
          {/* <p className='text-center sm:text-start'> I&apos;m a 3rd year at UVA. I'm making this because I'm bored, and love problem 
                  solving and learning new things, like making this website.</p> */}
        </div>
      </section>
      <p className='space-y-3 text-center font-extralight'>
          If the ChatBot tells you something went wrong, please email me at sanjaykarun@gmail.com
          to remind me to take my database (AstraDB) out of hibernation. Thanks!
        </p>
        <br></br>
      <section className="space-y-3 text-center">
        <H2>Ask the chatbot anything you want about me</H2>
        <p>
          Click the little <Bot className="inline pb-1" /> icon in the top bar to activate
          the AI chat.
        </p>
        
        <br />
      </section>


      <section className="space-y-16 bg-cover bg-no-repeat px-1 py-8">
            <div className="max-w-4xl mx-auto">
              <H1 className="text-center">About Me</H1>
              <br />
              <section className="text-center grid grid-cols-1 items-center gap-8">
                <div className="space-y-3">
                  <H2 className="text-center">Who am I?</H2>
                  <p className="text-center">
                    I&apos;m a 4th year at UVA pursuing a B.S in Computer Science, B.A in Mathmatics, and Minor in Data Science expected to be completed by Spring of 2026. 
                    I am passionate about solving problems and learning anything cool.  
                  </p>
                </div>
              </section>
              <br /><br />
              {/* along with a M.S in Computer Science */}
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
          <H1 className="text-center">Professional Experience</H1>
          <br />
          {/* Experience Section */}
          <section className="grid grid-cols-1 gap-8">

            {/* Research */}
            <div className="shadow-md p-6 rounded-lg">
              <h2 className="text-center text-lg font-semibold">University of Virginia</h2>
              <p className="text-center text-white-600">Undergraduate Artificial Intelligence Researcher</p>
              <p className="text-center text-white-500 mt-2">August 2025 – Present</p>
              <br />
              <ul className="custom-list text-white-500 list-disc">
                <li>Training Reinforcement Learning Agents to collaborate with humans to improve task performance with Proximal Priority Optimization. 
                  Conducting experiments with multi-agent settings to analyze cooperation, incentives, and emergent behaviors.</li>
              </ul>
            </div>
           
            {/* Work Experience 1 */}
            <div className="shadow-md p-6 rounded-lg">
              <h2 className="text-center text-lg font-semibold">GEICO</h2>
              <p className="text-center text-white-600">Software Development Intern</p>
              <p className="text-center text-white-500 mt-2">June 2025 – August 2025</p>
              <br />
              <ul className="custom-list text-white-500 list-disc"
                >
                <li>Pioneered an MVP dashboard for a Project Development Life Cycle management system based on Shift Left methodology; 
                  created a REST API leveraging Django, PostgreSQL, TypeScript, and React; scoped to benefit 3000+ engineers.</li>
                <br />
                <li>Partnered with 15+ Senior Directors, VPs, PMs, Engineers and SMEs in a cross-functional team to design a product 
                  workflow optimization system with JSON integration, Redis caching, GraphQL querying, and Azure DevOps/Slack automation.</li>
                <br />
                <li>Implemented efficient GET/POST requests for bidirectional synchronization and timed system reloads to prevent 
                  race conditions.</li>
                <li>Engineered an email automation script by pre-processing 17,000+ repositories to reach out to 2000+ system owners; 
                  utilized Power BI and Excel for data input organization and communication for stakeholders, using pandas for email sending automation.</li>
          
              </ul>
            </div>

            {/* Work Experience 2 */}
            <div className="shadow-md p-6 rounded-lg">
              <h2 className="text-center text-lg font-semibold">3M</h2>
              <p className="text-center text-white-600">Software Engineer Intern (Contract)</p>
              <p className="text-center text-white-500 mt-2">May 2024 – July 2024</p>
              <br />
              <ul className="custom-list text-white-500 list-disc"
                >
                <li>Crafted an efficient data processing solution leveraging Spring Boot and Spring Batch, handling over 2,000,000+ search data
points belonging to 3M from Salesforce and Sharepoint, with thorough error handling.</li>
                <br />
                <li>Optimized and utilized scalable big data pipelines with Apache Airflow and Kafka, enabling real-time streaming data integration
with batch processing, leading to a 6% improvement in processing efficiency for semantic search, based on time and CPU usage.</li>
                <br />
                <li>Utilized Amazon Bedrock for Natural Language Processing (NLP), employing Titan Text Embeddings to transform words into
high dimensional vectors, enabling vectorized search for Retrieval-Augmented Generation (RAG). </li>
                <br />
                <li>Incorporated kNN vectors (k=5) for embedding storage with lambda functions on OpenSearch, prompt engineering Anthropic
Claude API to generate context-relevant responses; leveraging Swagger for API development. </li>
              </ul>
            </div>

            
            
            {/* Work Experience 3 */}
            <div className="shadow-md p-6 rounded-lg">
              <h2 className="text-center text-lg font-semibold">SS Technology</h2>
              <p className="text-center text-white-600">Full Stack Engineer Intern</p>
              <p className="text-center text-white-500 mt-2">December 2023 – May 2024</p>
              <br />
              <ul className="custom-list text-white-500 list-disc">
                <li>Directed a group of interns to develop a REST API, organized meetings via JIRA for agile sprint management. 
                  Worked on CI/CD pipelines for an employee management app using Docker, Kubernetes, Jenkins + Bitbucket, reducing deployment times by 30%.</li>
                <br />
                <li>Designed and created a secure back-end authentication system using React, Express, Node.js, and MongoDB, utilizing JWT and Bcrypt to 
                  enhance security by eliminating all major authentication vulnerabilities by replacing an insecure SHA-256 hash.</li>
                <br />
                <li>Automated monitoring tasks through Linux/Unix environments with Bash scripting to reduce manual setup time.</li>
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
            <H1 className="text-center">My Projects and Activities</H1>
            <br />
            {/* Rendering Project Cards */}
            <section className="grid grid-cols-2 gap-8">
                <ProjectCard
                    title="Micrograd"
                    description={[
                        "Implementing backpropagation over a dynamically built DAG. Creating a neural network from scratch."
                    ]}
                    stack="TensorFlow, Python, Neural Networks, Backpropagation, Gradient Descent"
                    dateRange="August 2025 – Present"
                />
                <ProjectCard
                    title="SK-GPT"
                    description={[
                        "Implemented ChatGPT from scratch using neural networks with custom backpropagation and gradient descent algorithms."
                    ]}
                    stack="TensorFlow, Python, Neural Networks"
                    dateRange="August 2025 – Present"
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
                        "Implemented reinforcement learning to dynamically synthesize adaptive market intelligence."
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
        {/* Project ends here */}

    </section>
  );
};

// Export the Home component as the default export
export default Home;
