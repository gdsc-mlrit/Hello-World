"use client"

import Nav from "@/components/Nav";
import Hero from "@/sections/Hero";
import Faqs from "@/sections/Faqs";
import About from "@/components/About";
import { useState } from "react";
import { AboutHelloWorld } from "@/sections/AboutHelloWorld";
import { AboutGdsc } from "@/sections/AboutGdsc";


export default function Home() {
  const [dark, setDark] = useState(true);
  const changeTheme = () => {
    setDark(!dark)
  }
  return (
    <main className="transition-all">
      <Nav dark={dark} changeTheme={changeTheme}/>

      <section id="Home">
      <Hero dark={dark}/>
      </section>

      <section id="About" className="bg-[#151515] min-h-screen flex justify-center pt-[5rem] relative">
        <AboutHelloWorld dark={dark}/>
      </section>

      <section className="h-[100vh] bg-[#151515] flex w-full justify-center items-center relative">
        <AboutGdsc />
        <div className="w-[50%] absolute mx-auto top-0 bg-[#99f94e] flex justify-center items-center rounded-2xl">
          <h2 className="text-black text-[3em] font-semibold font-poppins py-2 px-3">WHO ARE WE?</h2>
        </div>
      </section>


      <section className="h-[110vh] w-full relative flex justify-center items-center bg-[#151515]">
        <h1 className="text-[12em] text-white font-poppins font-semibold z-[10]">Explore <span className="text-[#99f94e]">Life</span>.</h1>
        <div className="absolute m-auto w-[35%] ">
          <img src="/Layer_1.png" alt="" />
        </div>
        
      </section>

      <div className="w-full h-[5rem] bg-[#99f94e] flex justify-center items-center">
        <img src="/arrow.png" alt="" width={40}/>
      </div>

      <About />

      <section className="bg-white min-h-screen bg[url(/bgImage.png)] bg-cover"></section>
      <section className="min-h-screen"></section>

      <Faqs/>
    </main>
  );
}
