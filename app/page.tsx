"use client";

import Nav from "@/components/Nav";
import Faqs from "@/sections/Faqs";
import Abou from "@/components/Abou";
import Abou1 from "@/components/Abou1";
import Abou2 from "@/components/Abou2";
import Mobileab from "@/components/Mobileab";
import Speaker from "@/components/Speaker";
import Guestspeaker from "@/components/Guestspeaker";
import Scrolll from "@/components/Scrolll";
import { AboutHelloWorld } from "@/sections/AboutHelloWorld";
import { AboutHelloWorld2 } from "@/sections/AboutHelloWorld2";
import AboutGdsc2 from "@/sections/AboutGdsc2";
import Hero2 from "@/sections/Hero2";
import AboutNew from "@/components/Dinesh";
import Dinesh from "@/components/Dinesh";
import Adithya from "@/components/Adithya";
import Sherlock from "@/components/Sherlock";

export default function Home() {
  const dark = true;
  return (
    <main className="transition-all bg-[#151515] max-w-[1440px]">
      <Nav dark={dark} />

      <section id="HOME" className="flex justify-center">
        <Hero2 />
      </section>

      <section className="bg-[#151515] min-h-screen flex justify-center sm:pt-[5rem] relative items-center max-sm:py-3">
        <AboutHelloWorld dark={dark} />
      </section>

      {/* <section className="bg-[#151515]">
        <AboutHelloWorld2 dark={dark} />
      </section> */}

      <section className="py-[10rem] flex justify-center">
        <AboutGdsc2 />
      </section>

      {/* <section className="sm:h-[110vh] min-h-[60vh] w-full relative flex justify-center items-center bg-[#151515] max-sm:pb-[6rem]">
        <h1 className="text-[12vw] text-white font-poppins font-semibold z-[10]">
          Explore <span className="text-[#99f94e]">Life</span>.
        </h1>
        <div className="absolute m-auto w-[35%] ">
          <img src="/Layer_1.png" alt="" />
        </div>
      </section> */}

      <div className="w-full h-[2rem] bg-[#99f94e]"></div>

      <section className="flex justify-center my-10 mt-24">
        <Dinesh />
      </section>

      <section className="flex justify-center my-10">
        <Sherlock />
      </section>

      <section className="flex justify-center my-10">
        <Adithya />
      </section>

      <div className="w-full h-[2rem] bg-[#99f94e]"></div>

      <section id="DOMAINS">
        <Mobileab />
        {/* <Mobileab />about for sm devices */}
        <Speaker />
      </section>

      <Guestspeaker />
      {/*responsive*/}
      <Scrolll />
      {/*responsive*/}

      {/* <About />

      <section className="bg-white min-h-screen bg[url(/bgImage.png)] bg-cover"></section>
      <section className="min-h-screen"></section>

      <Faqs/> */}
    </main>
  );
}
