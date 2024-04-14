import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { ThemeProvider } from "@/components/ThemeProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanjay's Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>

        <ThemeProvider attribute="class">
          <Navbar />
          <main className = "mx-auto max-w-3xl px-3 py-10">
            {children}
          </main>
          <Footer/>
        </ThemeProvider>
       
        </body>
    </html>
  );
}