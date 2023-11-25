import Nav from "@/components/Nav";
import React from "react";

const page = () => {
  return (
    <main className="bg-[#151515]">
      <div className="min-h-screen flex flex-col items-center p-6">
        <div className="flex flex-row justify-center pt-8 ">
          <p className="font-londrina text-limee text-[50px] md:text-[100px] lg:text-[170px]">
            SPONSPORSHIP
          </p>
        </div>
        <div className="sm:px-8 md:px-12 lg:px-20  flex flex-row justify-center p-4 lg:w-[85%]">
          <p className="text-[#78818c] text-[20px] md:text-[35px] lg:text-[34px] sm:text-center">
            <span className="text-white">
              Sponsor 'Hello World' with GDSC MLRIT,
            </span>{" "}
            and be the driving force behind a groundbreaking initiative. As we
            delve into the vital domains of technology, design, and
            entrepreneurship, you'll not only ignite the passion of tomorrow's
            innovators but also{" "}
            <span className="text-white">
              connect with the brightest freshers
            </span>
            , providing them with the crucial exposure they need.{" "}
            <span className="text-white">Elevate your brand</span> as a
            forward-thinking industry leader and invest in the future of
            technology and innovation. Join us and unlock opportunities for your
            business while shaping the next generation of tech leaders.
          </p>
        </div>
        <div className="flex flex-row felx-wrap py-10">
          <p className="text-[#78818c] text-[15px] md:text-[25px] lg:text-[30px]">
            {"To know more details "}
            <a
              href="/HelloWorldBrochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-4 decoration-[#78818c] text-[15px] md:text-[25px] lg:text-[30px]"
            >
              {"read this"}
            </a>
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-around py-4 md:py-8">
          <div className="flex flex-col items-start px-4  md:px-12 lg:px-20">
            <p className="font-semibold text-white text-left text-[20px] md:text-[35px] lg:text-[40px]">
              1,000+
            </p>
            <span className="text-[#78818c] text-[10px] text-left md:text-[25px] lg:text-[30px]">
              attendees
            </span>
          </div>
          <div className="flex flex-col items-start px-4 md:px-12 lg:px-20">
            <p className="font-semibold text-white text-left text-[20px] md:text-[35px] lg:text-[40px]">
              3+
            </p>
            <span className="text-[#78818c] text-[10px] text-left md:text-[25px] lg:text-[30px]">
              speakers
            </span>
          </div>
        </div>
        <div className="p-4 py-10">
          <a href="https://forms.gle/6NJuthCbcMCnTZSM7">
            <button className=" transition-all duration-300 ease-in-out hover:scale-110 bg-transparent border border-limee text-xl text-limee py-4 px-4">
              BECOME A SPONSOR
            </button>
          </a>
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-center p-6">
        <div className="flex flex-row justify-center pt-8 ">
          <p className="font-londrina text-limee text-[50px] md:text-[100px] lg:text-[170px]">
            SPONSPORSHIP
          </p>
        </div>
        <div className="sm:px-8 md:px-12 lg:px-20  flex flex-row justify-center p-4 lg:w-[85%]">
          <p className="text-[#78818c] text-[20px] md:text-[35px] lg:text-[34px] sm:text-center">
            <span className="text-white">
              Sponsor 'Hello World' with GDSC MLRIT,
            </span>{" "}
            and be the driving force behind a groundbreaking initiative. As we
            delve into the vital domains of technology, design, and
            entrepreneurship, you'll not only ignite the passion of tomorrow's
            innovators but also{" "}
            <span className="text-white">
              connect with the brightest freshers
            </span>
            , providing them with the crucial exposure they need.{" "}
            <span className="text-white">Elevate your brand</span> as a
            forward-thinking industry leader and invest in the future of
            technology and innovation. Join us and unlock opportunities for your
            business while shaping the next generation of tech leaders.
          </p>
        </div>
        <div className="flex flex-row felx-wrap py-10">
          <p className="text-[#78818c] text-[15px] md:text-[25px] lg:text-[30px]">
            {"To know more details "}
            <a
              href="/HelloWorldBrochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-4 decoration-[#78818c] text-[15px] md:text-[25px] lg:text-[30px]"
            >
              {"read this"}
            </a>
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-around py-4 md:py-8">
          <div className="flex flex-col items-start px-4  md:px-12 lg:px-20">
            <p className="font-semibold text-white text-left text-[20px] md:text-[35px] lg:text-[40px]">
              1,000+
            </p>
            <span className="text-[#78818c] text-[10px] text-left md:text-[25px] lg:text-[30px]">
              attendees
            </span>
          </div>
          <div className="flex flex-col items-start px-4 md:px-12 lg:px-20">
            <p className="font-semibold text-white text-left text-[20px] md:text-[35px] lg:text-[40px]">
              3+
            </p>
            <span className="text-[#78818c] text-[10px] text-left md:text-[25px] lg:text-[30px]">
              speakers
            </span>
          </div>
        </div>
        <div className="p-4 py-10">
          <a href="https://forms.gle/6NJuthCbcMCnTZSM7">
            <button className=" transition-all duration-300 ease-in-out hover:scale-110 bg-transparent border border-limee text-xl text-limee py-4 px-4">
              BECOME A SPONSOR
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default page;
