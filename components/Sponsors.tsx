import React from "react";

const Sponsors = () => {
  return (
    <div className=" w-full px-6 bg-[#151515] py-10 md:pt-[150px]">
      <div className="text-center h-auto flex flex-col items-center">
        <div>
          <h1 className="text-limee leading-[40px] text-center text-[40px] md:text-[60px] md:leading-[60px] lg:text-[80px] lg:leading-[80px] font-bold">
            Our Sponsers
          </h1>
        </div>

        {/* <div className="flex md:w-[75%] w-full px-5 gap-5 py-12 justify-between">
          <img
            src="/Part1.png"
            className="lg:w-[12rem] lg:h-[12rem] md:w-[9rem] md:h-[9rem] w-[5rem] h-[5rem]"
            alt=""
          />
          <img
            src="/Part2.png"
            className="lg:w-[12rem] lg:h-[12rem] md:w-[9rem] md:h-[9rem] w-[5rem] h-[5rem]"
            alt=""
          />
          <div className="flex flex-col justify-center items-start">
            <img src="/THE.png" className="w-[14rem]" alt="" />
            <img src="Part3.png" className="w-[15rem]" alt="" />
            <img src="LEAGUE.png" className="w-[14rem]" alt="" />
          </div>
        </div> */}
        <div className="flex max-sm:flex-col max-sm:justify-center sm:justify-between items-center rounded-2xl bg-[#1f1f1f] lg:w-[75%] w-full  p-3 mt-10 max-lg:px-10">
          <h2 className="lg:text-[3.5rem] md:text-[3rem] text-[2.5rem] bg-gradient-to-r to-yellow-300 from-[#b38728] text-transparent bg-clip-text font-semibold lg:pl-3">
            Gold:
          </h2>
          <a href="https://www.jdoodle.com/" target="_blank">
            <img
              src="/JD_logo.webp"
              alt=""
              className="lg:h-[10rem] md:h-[7rem] h-[5rem]"
            />
          </a>
        </div>
        <div className="flex max-sm:flex-col max-sm:justify-center sm:justify-between items-center rounded-2xl bg-[#1f1f1f] lg:w-[75%] w-full p-3 mt-10 max-lg:px-10">
          <h2 className="lg:text-[3.5rem] md:text-[3rem] text-[2.5rem] bg-gradient-to-r from-gray-500 to-gray-100 text-transparent bg-clip-text font-semibold lg:pl-3">
            Silver:
          </h2>
          <div className="flex flex-col justify-center items-start lg:pr-24 p-5">
            <img
              src="/THE.png"
              className="lg:w-[10rem] md:w-[7rem] w-[8rem]"
              alt=""
            />
            <img
              src="Part3.png"
              className="lg:w-[12rem] md:w-[9rem] w-[9rem]"
              alt=""
            />
            <img
              src="LEAGUE.png"
              className="lg:w-[10rem] md:w-[7rem] w-[8rem]"
              alt=""
            />
          </div>
        </div>
        <div className="flex max-sm:flex-col max-sm:justify-center sm:justify-between items-center rounded-2xl bg-[#1f1f1f] lg:w-[75%] w-full p-3 mt-10 max-lg:px-10">
          <h2 className="lg:text-[3.5rem] md:text-[3rem] text-[2.5rem] text-white font-semibold lg:pl-3">
            Associate
          </h2>
          <a href="https://cie.iiit.ac.in/" target="_blank">
            <img src="IIIT-CIE-Logo.png" alt="" className="h-[10rem]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
