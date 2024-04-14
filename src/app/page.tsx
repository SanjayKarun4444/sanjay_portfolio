import Image from 'next/image';
import { Metadata } from "next";
import "./globals.css";
import { H1 } from '@/components/ui/H1';
import { H2 } from '@/components/ui/H2';
import { H3 } from '@/components/ui/H3';

import me from '/public/gradpichs.jpg'

import {Bot} from "lucide-react"

export const metadata: Metadata = {
  title: "Sanjay Karunamoorthy | My Portfolio",
  description: "Sanjay is a 3rd year Student at the University of Virginia.",
}


const Home = () => {
  return (
    <section className= "space-y-16 bg-cover  bg-no-repeat px-1 py-8" > 
    {/* bg-[url('/underConstruction.jpeg')] */}
      <section className='grid grid-cols-1 items-center gap-8'>
        {/* sm:grid-cols-2 */}
        {/* <Image src="/underConstruction.jpeg" alt="Construction" width={400} height={400} /> */}
        <div className="space-y-3">
          <H1 className="text-center sm:text-start">Hi, My Name&apos;s Sanjay!</H1>
          <p className='text-center sm:text-start'> I&apos;m a 3rd year at UVA. im making this bc im bored.
          i love problem solving and learning new things, like making this website.</p>
        </div>

        {/* <div className="flex justify-between items-center"> 
          <div className="flex justify-left"> 
            <Image
              src={me}
              alt="pic of me"
              height={400}
              width={400}
              className="rounded-full border-4 object-cover cropped-image"
              style={{ objectFit: 'cover', objectPosition: 'left', overflow: 'hidden' }}
            />
          </div>

          <div>
            <h1>I produce music and code for fun!</h1>
          </div>
        </div> */}

      </section>

      <section className="space-y-3 text-center">
        <H2>Ask the chatbot below anything you want about me</H2>

        <p>
          Click the little <Bot className = "inline pb-1"/> icon in the top bar to activate
          the AI chat. You can ask the chatbot any questions about me and it will find relevant info on this website.
          The bot can even provide links to pages you&apos;re looking for.
        </p>
        
      </section>
      
    </section>
  )
}

export default Home;


