"use client";

import Nav from "@/components/Nav";
import Faqs from "@/sections/Faqs";
import Mobileab from "@/components/Mobileab";
import Speaker from "@/components/Speaker";
import Guestspeaker from "@/components/Guestspeaker";
import Scrolll from "@/components/Sponsors";
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
        className="bg-[#151515] flex justify-center sm:pt-[5rem] relative items-center max-sm:py-3"
      >
        <AboutHelloWorld dark={dark} />
      </section>

      <section className="w-full flex items-center justify-center pt-[10rem]">
        <div className="lg:w-[75%] w-[90%] bg-[#1f1f1f] flex items-center border border-limee lg:p-20 p-5 md:p-14 md:rounded-[5rem] rounded-3xl">
          <div className="flex flex-col items-center">
            <h1 className="lg:text-[5rem] md:text-[4rem] md:leading-[4rem] text-[3rem] leading-[3rem] font-semibold lg:leading-[5.5rem] max-md:p-3 text-limee">
              Competition
            </h1>
            <p className="text-[#dcdcdc] lg:text-2xl text-2xl pt-5 lg:w-[75%]">
              "Embark on a two-fold adventure – share your learning journey on
              social media and build everything from ideation presentations to
              deployable projects in 30 days. Participation is optional,
              highlighting exploration over obligation. Projects will be
              assessed for consistency, feasibility, and usability, with the top
              20 teams celebrated for their innovative contributions at the
              dynamic intersection of learning and creativity. Join us in this
              enriching journey where knowledge meets imagination and unleash
              your creativity today!"
            </p>
          </div>
          <img
            src="/small_icons/compitition.svg"
            alt=""
            className="h-48 px-10 max-lg:hidden"
          />
        </div>
      </section>

      <section className="py-[10rem] flex justify-center">
        <AboutGdsc2 />
      </section>

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
