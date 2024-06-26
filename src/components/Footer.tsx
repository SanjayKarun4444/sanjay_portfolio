import Link from "next/link"


export default function Footer(){

    return <footer className="bottom-0 w-full">
        <nav className="max-w-3xl mx-auto flex gap-3 p-3">
        <Link href="/privacy">Privacy</Link>
        <Link href="/social">My Socials</Link>
        </nav>
  </footer>
}