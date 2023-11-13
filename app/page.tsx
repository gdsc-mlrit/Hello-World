"use client";

import Nav from "@/components/Nav";
import Faqs from "@/sections/Faqs";
import Speaker from "@/components/Speaker";
import Guestspeaker from "@/components/Guestspeaker";
import Sponsors from "@/components/Sponsors";
import { AboutHelloWorld } from "@/sections/AboutHelloWorld";
import AboutGdsc2 from "@/sections/AboutGdsc2";
import Hero2 from "@/sections/Hero2";
import Dinesh from "@/components/Dinesh";
import Adithya from "@/components/Adithya";
import Sherlock from "@/components/Sherlock";
import Footer from "@/sections/Footer";
import Socials from "@/components/Socials";
import Team from "@/sections/Team";
import TeamMobile from "@/sections/TeamMobile";
import DomainsMobile from "@/sections/DomainsMobile";

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
        className="bg-[#151515] sm:pt-[5rem] relative max-sm:py-3"
      >
        <AboutHelloWorld dark={dark} />
      </section>

      <section className="py-[10rem] flex justify-center">
        <AboutGdsc2 />
      </section>

      <div className="w-full h-[2rem] bg-[#99f94e]"></div>

      <section id="DOMAINS" className="bg-[#1f1f1f]">
        <section className="flex justify-center pt-24 max-sm:hidden ">
          <Dinesh />
        </section>

        <section className="flex justify-center my-20 max-sm:hidden">
          <Sherlock />
        </section>

        <section className="flex justify-center my-20 max-sm:hidden">
          <Adithya />
        </section>

        <div className="w-full h-[2rem] bg-[#99f94e] max-sm:hidden"></div>

        <section className="sm:hidden bg-[#1f1f1f]">
          <DomainsMobile />
          <Speaker />
        </section>
      </section>

      <div className="md:hidden h-2 bg-limee w-full mt-10"></div>

      <section className="pt-10">
        <Guestspeaker />
      </section>

      <section className="pt-10">
        <Sponsors />
      </section>

      <section className="pt-24 lg:pt-[10rem] flex flex-col justify-center items-center">
        <h1 className="text-limee leading-[40px] text-center text-[40px] md:text-[60px] md:leading-[60px] lg:text-[80px] lg:leading-[80px] font-bold">
          Meet the team
        </h1>
        <div className="pt-10 flex justify-center">
          <Team />
          <TeamMobile />
        </div>
      </section>

      <section id="FAQS" className="flex justify-center pt-10 lg:pt-[10rem]">
        <Faqs />
      </section>

      <footer
        id="CONTACT US"
        className="w-full border-t border-limee bg-[#1f1f1f] flex flex-col items-center mt-[5rem]"
      >
        <Footer />
        <Socials />
      </footer>
    </main>
  );
}
