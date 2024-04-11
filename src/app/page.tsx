import Image from 'next/image';
import { Metadata } from "next";
import "./globals.css";
import { H1 } from '@/components/ui/H1';


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
          <p className='text-center sm:text-start'> I'm a 3rd year at UVA. im making this bc im bored.
          i love problem solving, thinking through problem, and learning new things, like making this website.</p>
        </div>

      </section>
      
    </section>
  )
}

export default Home;
