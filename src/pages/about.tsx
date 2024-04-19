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


export default function about() {
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

                        

                        <div className="text-center">
                            <Link href="/">Go back to Home</Link>
                        </div>
                    </div>
                </section>
            </main>

            
        </ThemeProvider>
    )
}
