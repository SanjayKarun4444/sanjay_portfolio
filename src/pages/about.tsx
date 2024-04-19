import { Metadata } from "next";
import Link from "next/link"
import { Inter } from "next/font/google";
import "../app/globals.css";

import { H1 } from "@/components/ui/H1"
import Navbar from "@/components/Navbar"
import { Layout } from "lucide-react";

import { ThemeProvider } from "@/components/ThemeProvider";



export default function about(){
    
    return (
        <ThemeProvider attribute="class">
            <div>
                <Navbar/>
            </div>

            <section className= "space-y-16 bg-cover  bg-no-repeat px-1 py-8" > 
                <div>
                    <H1>About Me</H1>
                    
                    <Link href="/">Go back to Home</Link>
                </div>
            </section>
        </ThemeProvider>
    )
    


}