import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello World",
  description:
    "A GDSC MLRIT initiative to make students discover the world through Innovation, Design and Tech.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#151515] overflow-x-hidden">
      <Providers>
        <body className={`xl:flex xl:justify-center bg-[#151515]`}>
          {children}
        </body>
      </Providers>
    </html>
  );
}
