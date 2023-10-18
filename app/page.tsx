"use client"

import Nav from "@/components/Nav";
import Hero from "@/sections/Hero";
import Faqs from "@/sections/Faqs";
import About from "@/components/About";
import { useState } from "react";


export default function Home() {
  const [dark, setDark] = useState(false);
  const changeTheme = () => {
    setDark(!dark)
  }
  return (
    <main className="transition-all">
      <Nav dark={dark} changeTheme={changeTheme}/>

      <section id="Home">
      <Hero dark={dark}/>
      </section>


      <About />

      <section className="bg-white min-h-screen bg[url(/bgImage.png)] bg-cover"></section>
      <section className="min-h-screen"></section>

      <Faqs/>
    </main>
  );
}
