import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Providers} from "./providers";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hello World',
  description: 'A GDSC MLRIT initiative to make students discover the world through Innovation, Design and Tech.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <html lang="en">
          <Providers>
            <body className={inter.className}>
              {children}
            </body>
          </Providers>
        </html>


  )
}
