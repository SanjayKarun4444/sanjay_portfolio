import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sanjay | Personal Portfolio',
  description: 'Sanjay is a 3rd year Student at the University of Virginia.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* bg-slate-300 for bluish background bg-gray-50 is for gray */}
      <body className={`${inter.className} bg-slate-300 text-gray-`}> 
        {children}</body>
    </html>
  )
}
