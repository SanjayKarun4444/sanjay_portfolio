import Image from 'next/image';
import { Metadata } from "next";
import "./globals.css";
import { H1 } from '@/components/ui/H1';
import { H2 } from '@/components/ui/H2';
import { H3 } from '@/components/ui/H3';

import me from '/public/gradpichs.jpg'


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

        <div className="flex justify-between items-center"> {/* Use justify-between for horizontal alignment */}
          <div className="flex justify-left"> {/* Set flex to left-align the image */}
            <Image
              src={me}
              alt="pic of me"
              height={400}
              width={400}
              className="rounded-full card custom-border"
            />
          </div>

          <div>
            <h1>I love music and code for fun!</h1>
          </div>
        </div>

      </section>
      
    </section>
  )
}

export default Home;


