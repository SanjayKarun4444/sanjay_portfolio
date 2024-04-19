import Link from "next/link"
import { H1 } from "@/components/ui/H1"
import Navbar from "@/components/Navbar"
import "../app/globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";



export default function projects(){

    return(
        <ThemeProvider attribute="class">
            <div>

                <Navbar/>
                <H1>My Projects</H1>
                
                <Link href="/">Go back to Home</Link>
            </div>
        </ThemeProvider>

    )

}