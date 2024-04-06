import Image from 'next/image';
import { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Sanjay Karunamoorthy | My Portfolio",
  description: "Sanjay is a 3rd year Student at the University of Virginia.",
}

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <section className="text-center">
        <Image src="/underConstruction.jpeg" alt="Construction" width={400} height={400} />
        <div className="flex justify-center">
          <p>Page is Under Construction :)</p>
        </div>
      </section>
    </div>
  )
}

export default Home;
