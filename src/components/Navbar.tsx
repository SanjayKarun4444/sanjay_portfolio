// components/navbar.tsx

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 bg-background">
      <div className="max-w-3xl mx-auto flex flex-wrap justify-between gap-3 px-3 py-4">
        <nav className="space-x-4 font-medium">
          <Link href="/">Home</Link>
          <Link href="/AboutMe">About Me</Link> {/* Make sure casing matches */}
          <Link href="/projects">Projects</Link>
        </nav>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
