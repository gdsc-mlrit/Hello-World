"use client"

import Nav from "@/components/Nav";
import Hero from "@/sections/Hero";
import Faqs from "@/sections/Faqs";
import Tag from "@/components/Tag";

export default function Home() {
  return (
    <main>
      <Nav />

      <Hero />

      <section className="bg-white min-h-screen bg[url(/bgImage.png)] bg-cover"></section>
      <section className="min-h-screen"></section>

      <Faqs/>
    </main>
  );
}
