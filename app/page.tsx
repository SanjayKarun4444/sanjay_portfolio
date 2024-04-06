import Image from 'next/image'
import {Metadata} from "next";
import "./globals.css"

export const metadata: Metadata = {
  title: "Sanjay Karunamoorthy | My Portfolio",
  description: "Sanjay is a 3rd year Student at the University of Virginia.",
}

//  bg-[url('/img.jpg')] bg-cover bg-center bg-no-repeat px-1 py-8

export default function Home() {
  return (
    <section className="space-y-6">
      Page is Under Construction :)
    </section>
  )
}
