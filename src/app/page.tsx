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
        <H2>Ask the chatbot below anything you want about me</H2>
        <p>
          Click the little <Bot className="inline pb-1" /> icon in the top bar to activate
          the AI chat. You can ask the chatbot any questions about me and it will find relevant info on this website.
          The bot can even provide links to pages you&apos;re looking for.
        </p>
        <br /><br />
        <H2 className='display:flex; justify-content:center; align-items:center;'>ChatBot is Currently Being Built.</H2>
        <br />
      </section>
    </section>
  );
};

// Export the Home component as the default export
export default Home;
