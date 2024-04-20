import { Metadata } from "next";
import Link from "next/link"
import { Inter } from "next/font/google";
import "../app/globals.css";

import { H1 } from "@/components/ui/H1"
import { H2 } from '@/components/ui/H2';
import { H3 } from '@/components/ui/H3';


import Navbar from "@/components/Navbar"
import { Layout } from "lucide-react";

import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";


const SkillsSection = () => (
    <section className="space-y-8">
      <H2 className="text-center">Skills</H2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2 text-center">Languages</h3>
          <ul className="text-center"> {/* removed list-disc and pl-5*/}
            <li>Java</li>
            <li>Python</li>
            <li>C</li>
            <li>JavaScript</li>
            <li>SQLite</li>
            <li>CSS</li>
            <li>HTML</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2 text-center">Technologies</h3>
          <ul className="text-center">
            <li>React</li>
            <li>Node.js</li>
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
  
  export default function About() {
    return (
      <ThemeProvider attribute="class">
        <div>
          <Navbar />
        </div>
  
        <main className="mx-auto max-w-3xl px-3 py-10">
          <section className="space-y-16 bg-cover bg-no-repeat px-1 py-8">
            <div className="max-w-4xl mx-auto">
              <H1 className="text-center">About Me</H1>
              <br />
              <section className="grid grid-cols-1 items-center gap-8">
                <div className="space-y-3">
                  <H2 className="text-center sm:text-left">Who am I?</H2>
                  <p className="text-center sm:text-left">
                    I&apos;m a 3rd year at UVA pursuing a B.S in Computer Science. I am passionate about solving problems
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
        </main>
  
        <div>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
