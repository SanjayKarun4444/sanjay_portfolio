import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Personal Portfolio",
    default: "Sanjay Karunamoorthy",
  },
  description: "Sanjay is a 3rd year Student at the University of Virginia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* bg-slate-300 for bluish background bg-gray-50 is for gray */}
      <body className={inter.className}>
        <main className="mx-auto max-w-3xl px-3 py-10 ">{children}</main>
      </body>
    </html>
  );
}
