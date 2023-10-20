"use client"

import Nav from "@/components/Nav";
import Hero from "@/sections/Hero";
import Faqs from "@/sections/Faqs";
import Abou from "@/components/Abou";
import Abou1 from "@/components/Abou1";
import Abou2 from "@/components/Abou2";
import Mobileab from "@/components/Mobileab";
import Speaker from "@/components/Speaker";
import Guestspeaker from "@/components/Guestspeaker";
import Scrolll from "@/components/Scrolll"
// import { useState } from "react";
import { AboutHelloWorld } from "@/sections/AboutHelloWorld";
import { AboutGdsc } from "@/sections/AboutGdsc";


export default function Home() {
  // const [dark, setDark] = useState(true);
  // const changeTheme = () => {
  //   setDark(!dark)
  // }
  const dark = true;
  return (
    <main className="transition-all bg-[#151515]">

      <Nav dark={dark}/>

      <section id="HOME" className="relative max-sm:py-3">
        <Hero dark={dark}/>
      </section>

      <section className="bg-[#151515] min-h-screen flex justify-center sm:pt-[5rem] relative items-center max-sm:py-3">
        <AboutHelloWorld dark={dark}/>
      </section>

      <section id="ABOUT" className="min-h-[60vh] sm:h-[100vh] bg-[#151515] flex w-full justify-center items-center relative max-sm:py-3">
        <AboutGdsc />
        <div className="sm:w-[50%] hidden absolute mx-auto sm:top-0 top-[5rem] bg-[#99f94e] sm:flex justify-center items-center rounded-2xl">
          <h2 className="text-black text-[3vw] max-sm:text-[1.5rem] font-semibold font-poppins py-2 px-3">WHO ARE WE?</h2>
        </div>
      </section>


      <section className="sm:h-[110vh] min-h-[60vh] w-full relative flex justify-center items-center bg-[#151515] max-sm:pb-[6rem]">
        <h1 className="text-[12vw] text-white font-poppins font-semibold z-[10]">Explore <span className="text-[#99f94e]">Life</span>.</h1>
        <div className="absolute m-auto w-[35%] ">
          <img src="/Layer_1.png" alt="" />
        </div>
      </section>

      <div className="w-full h-[5vh] bg-[#99f94e] flex justify-center items-center">
        <img src="/arrow.png" alt="" width={40}/>
      </div>

    <section id="DOMAINS">
      <Mobileab />
      {/* <Mobileab />about for sm devices */}
      <Speaker /> 
      <Abou />
      <Abou2 /> {/*All abou files are for md and lg devices */}
      <Abou1 />
    </section>

    <Guestspeaker />{/*responsive*/}
    <Scrolll />{/*responsive*/}

      {/* <About />

      <section className="bg-white min-h-screen bg[url(/bgImage.png)] bg-cover"></section>
      <section className="min-h-screen"></section>

      <Faqs/> */}
    </main>
  );
}
