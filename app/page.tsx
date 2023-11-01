"use client";

import Nav from "@/components/Nav";
import Faqs from "@/sections/Faqs";
import Mobileab from "@/components/Mobileab";
import Speaker from "@/components/Speaker";
import Guestspeaker from "@/components/Guestspeaker";
import Scrolll from "@/components/Scrolll";
import { AboutHelloWorld } from "@/sections/AboutHelloWorld";
import AboutGdsc2 from "@/sections/AboutGdsc2";
import Hero2 from "@/sections/Hero2";
import Dinesh from "@/components/Dinesh";
import Adithya from "@/components/Adithya";
import Sherlock from "@/components/Sherlock";
import Footer from "@/sections/Footer";

export default function Home() {
  const dark = true;
  return (
    <main className="transition-all bg-[#151515] max-w-[1440px]">
      <Nav dark={dark} />

      <section id="HOME" className="flex justify-center">
        <Hero2 />
      </section>

      <section
        id="ABOUT"
        className="bg-[#151515] min-h-screen flex justify-center sm:pt-[5rem] relative items-center max-sm:py-3"
      >
        <AboutHelloWorld dark={dark} />
      </section>

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

      <section
        id="DOMAINS"
        className="flex justify-center my-10 mt-24 max-sm:hidden"
      >
        <Dinesh />
      </section>

      <section className="flex justify-center my-20 max-sm:hidden">
        <Sherlock />
      </section>

      <section className="flex justify-center my-20 max-sm:hidden">
        <Adithya />
      </section>

      <div className="w-full h-[2rem] bg-[#99f94e] max-sm:hidden"></div>

      <section>
        <Mobileab />
        <Speaker />
      </section>

      <section className="pt-10">
        <Guestspeaker />
      </section>

      <section className="pt-10">
        <Scrolll />
      </section>

      <section id="FAQS" className="flex justify-center pt-10">
        <Faqs />
      </section>

      <footer
        id="CONTACT US"
        className="w-full border-t border-limee bg-[#1f1f1f] flex justify-center mt-[5rem]"
      >
        <Footer />
      </footer>
    </main>
  );
}
