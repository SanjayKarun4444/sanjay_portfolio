
import Navbar from "@/components/Navbar"
import "../app/globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";
import { H1 } from "@/components/ui/H1";
import Link from "next/link";


export default function privacy(){
    return (
        <ThemeProvider attribute="class">

            <H1 className="text-center">I don&apos;t take data from you. Even if I did, what would I do with that ;)</H1>
            <div className="text-center">
                <Link href="/">Go back to Home</Link>
            </div>
        </ThemeProvider>
    )
}



