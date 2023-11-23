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
import Helloworld from "@/sections/Helloworld";
import Explore from "@/sections/Explore";

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

      <section className="pt-[6rem] lg:pb-[10rem] pb-[5rem]  flex justify-center">
        <AboutGdsc2 />
      </section>

      <section className="py-[3rem]">
        <Explore />
      </section>

      <div className="w-full h-[2rem] bg-[#99f94e]"></div>

      <section id="DOMAINS" className="bg-[#1e1e1e]">
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

        <section className="sm:hidden bg-[#1e1e1e] pb-12">
          <DomainsMobile />
          <Speaker />
        </section>
      </section>

      <div className="md:hidden h-2 bg-limee w-full"></div>

      <section className="pt-10">
        <Guestspeaker />
      </section>

      <section className="pt-10">
        <Sponsors />
      </section>

      <section className="my-10">
        <Helloworld />
      </section>

      <section className="pt-24 lg:pt-[10rem] flex justify-center">
        <div className="lg:w-[90%] flex flex-col justify-center items-center sm:border border-limee rounded-[65px] py-10 sm:bg-[#1e1e1e]">
          <div className="relative pb-10">
            <h1 className="text-[#151515] leading-[40px] text-center text-[40px] md:text-[60px] md:leading-[60px] lg:text-[80px] lg:leading-[80px] font-bold special2  translate-y-[10%]">
              Meet our team.
            </h1>
            <h1 className="text-white leading-[40px] text-center text-[40px] md:text-[60px] md:leading-[60px] lg:text-[80px] lg:leading-[80px] font-bold absolute top-0">
              Meet <span className="text-limee">our team.</span>
            </h1>
          </div>

          <div className="sm:py-10 flex justify-center">
            <Team />
          </div>
        </div>
      </section>

      <section id="FAQS" className="flex justify-center pt-10 lg:pt-[10rem]">
        <Faqs />
      </section>

      <footer
        id="CONTACT US"
        className="bg-[#1f1f1f] flex flex-col items-center border-t border-limee mt-[5rem]"
      >
        <div className="w-full  bg-[#1f1f1f] flex flex-col items-center">
          <Footer />
        </div>
        <div className="sm:w-[75%] w-[70%] items-end sm:flex gap-5 pb-[3rem]">
          <div className="relative max-sm:pl-4">
            <h1 className="text-[#1f1f1f] special3 font-saria font-bold text-[2.7rem]">
              Resources:
            </h1>
            <h1 className="text-white absolute top-0 translate-y-[-0.25rem] translate-x-[-0.25rem] font-saria font-bold text-[2.7rem]">
              Resources:
            </h1>
          </div>

          <a
            href="/code-of-conduct.pdf"
            className="text-limee sm:text-[1.5rem] text-[1.2rem] font-saria max-sm:pl-3 underline-offset-1 underline pb-[0.6rem]"
          >
            Code of Conduct
          </a>
        </div>

        <p className="text-lg sm:text-xl md:text-2xl font-poppins py-5 text-white">
          Made with 💚, <span className="text-limee">GDSC MLRIT</span>
        </p>
      </footer>
    </main>
  );
}
