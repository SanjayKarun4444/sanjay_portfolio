import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
export default function navbar(){
    return <header className = "sticky top-0 bg-background">
        <div className="max-w-3xl mx-auto flex flex-wrap justify-between gap-3 px-3 py-4">
            <nav className="space-x-4 font-medium">
                <Link href="/">Home</Link>
                <Link href="/about">About Me</Link>
                <Link href="/projects">My Projects</Link>
            </nav>

            <div>
                <ThemeToggle />
            </div>

        </div>



    </header>
}