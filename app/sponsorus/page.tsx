"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import Nav from "@/components/Nav";

const page = () => {
  return (
    <div>
      <main className="bg-[url(/su-bg.png)] min-h-screen w-full flex justify-center font-hkgrotesk">
        <div className="lg:w-[55%] md:w-[75%] w-[95%] flex flex-col justify-center transition-all gap-10 py-10">
          <div className="flex gap-5 mx-auto px-1">
            <Image
              src="/sponsorus.png"
              width={170}
              height={170}
              alt="sponsorus image"
              className="lg:w-[170px] md:w-[120px] w-[85px]"
            />
            <h1 className="lg:text-[5rem] md:text-[3rem] text-[2rem] font-bold md:p-6 p-4 bg-limee rounded-md md:px-10">
              SPONSOR US
            </h1>
          </div>
          <div className="flex flex-col gap-10 mx-auto">
            <h3 className="text-white md:text-3xl text-2xl font-semibold pl-5">
              Sponsor '<span className="text-limee">Hello World</span>' with
              GDSC MLRIT, and be the{" "}
              <span className="text-limee">driving force </span>
              behind a{" "}
              <span className="text-limee">groundbreaking initiative</span>.
            </h3>

            <h4 className="md:text-2xl text-xl text-white pl-5">
              As we delve into the vital domains of technology, design, and
              entrepreneurship, you'll:
            </h4>

            <ul className="text-white list-disc pl-12 md:text-2xl text-xl px-2">
              <li>
                <span className="text-limee">Ignite the passion</span> of
                tomorrow's innovators.
              </li>
              <li>
                <span className="text-limee">
                  Connect with the brightest freshers
                </span>
                , providing them with the crucial exposure they need.
              </li>
              <li>
                <span className="text-limee">Elevate your brand</span> as a
                forward-thinking industry leader and{" "}
                <span className="text-limee">invest in the future</span> of
                technology and innovation.
              </li>
            </ul>

            <h4 className="md:text-3xl text-2xl font-semibold px-5 text-white">
              <span className="text-limee">Join us</span> and unlock
              opportunities for your business while shaping the
              <span className="text-limee"> next generation</span> of tech
              leaders.
            </h4>

            <div className="flex justify-between lg:px-[13rem] md:px-[7rem] px-[4rem] font-semibold text-white">
              <div className="flex flex-col items-center">
                <h1 className="md:text-6xl text-4xl">1400+</h1>
                <p className="md:text-3xl text-2xl">Audience</p>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="md:text-6xl text-4xl">3+</h1>
                <p className="md:text-3xl text-2xl">Speakers</p>
              </div>
            </div>

            <div className="flex gap-10  mx-auto lg:text-3xl md:text-2xl text-2xl max-sm:font-semibold max-sm:flex-col max-sm:gap-5">
              <Link
                href="/#CONTACT US"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-limee text-black rounded-full md:px-[1rem] lg:px-[2rem] py-3 px-[4rem] hover:bg-black hover:text-white duration-150"
              >
                Contact Us
              </Link>
              <Link
                href="/HelloWorldBrochure.pdf"
                className="bg-transparent border border-limee text-white rounded-full md:px-[1rem] px-[4rem] lg:px-[2rem] py-3 hover:bg-limee hover:text-black duration-150"
              >
                Know More
              </Link>
              <Link
                href="https://forms.gle/6NJuthCbcMCnTZSM7"
                className="bg-limee text-black rounded-full md:px-[1rem] lg:px-[2rem] px-[4rem] py-3 hover:bg-black hover:text-white duration-150"
              >
                Sponsor Us
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
