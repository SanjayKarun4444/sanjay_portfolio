import Link from "next/link"
import { H1 } from "@/components/ui/H1"
import Navbar from "@/components/Navbar"
import "../app/globals.css";



export default function projects(){

    return(
        <section className= "space-y-16 bg-cover  bg-no-repeat px-1 py-8" > 
            <div>

                <Navbar/>
                <H1>My Projects</H1>
                
                <Link href="/">Go back to Home</Link>
            </div>
        </section>

    )

}