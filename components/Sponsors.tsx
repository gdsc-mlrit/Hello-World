import React from "react";

const Sponsors = () => {
  return (
    <div className=" w-full px-6 bg-[#151515] py-10 md:pt-[150px]">
      <div className="text-center h-auto flex flex-col items-center m-auto">
        <div>
          <h1 className="text-limee leading-[30px] text-center text-[30px] md:text-[50px] md:leading-[50px] lg:text-[70px] lg:leading-[70px] font-bold">
            Our Sponsors
          </h1>
        </div>
        {/* <div className="flex max-sm:flex-col max-sm:justify-center sm:justify-between items-center rounded-2xl bg-[#1f1f1f] lg:w-[75%] w-full  p-3 mt-10 max-lg:px-10">
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
        </div> */}

        <h2 className="lg:text-[3.5rem] md:text-[3rem] text-[2.5rem] bg-gradient-to-r to-yellow-300 from-[#9c7623] text-transparent bg-clip-text font-semibold lg:pl-3">
          Gold:
        </h2>
        <div className="flex flex-wrap gap-10 w-[75%] justify-center rounded-3xl p-10 bg-[#1f1f1f]">
          <a href="https://www.jdoodle.com/" target="_blank" className="">
            <img
              src="/JD_logo.png"
              alt=""
              className="lg:h-[10rem] md:h-[7rem] h-[5rem]"
            />
          </a>
        </div>

        <h2 className="lg:text-[3.5rem] md:text-[3rem] text-[2.5rem] font-semibold lg:pl-3 bg-gradient-to-r to-[#d19200] from-[#7a5507] bg-clip-text text-transparent">
          Bronze
        </h2>
        <div className="flex flex-wrap gap-10 w-[75%] justify-center rounded-3xl p-10 bg-[#1f1f1f] m-auto">
          <a href="https://cie.iiit.ac.in/" target="_blank" className="pt-10">
            <img src="IIIT-CIE-Logo.png" alt="" className="w-[22rem]" />
          </a>
          <a href="https://beeceptor.com/?utm_source=gdsc" target="_blank">
            <img src="beer.svg" alt="" className="w-[22rem]" />
          </a>

          <a href="https://interviewbuddy.net/" target="_blank">
            <img src="iblogo.png" alt="" className="w-[22rem]" />
          </a>

          <a
            href="https://company.wolfram.com/press-center/wolfram-corporate/https://interviewbuddy.net/"
            target="_blank"
            className="flex items-center"
          >
            <img src="wolfram.png" alt="" className="w-[22rem]" />
          </a>
        </div>

        {/* <div className="flex max-sm:flex-col max-sm:justify-center sm:justify-between items-center rounded-2xl bg-[#1f1f1f] lg:w-[75%] w-full p-3 mt-10 max-lg:px-10">
          <h2 className="lg:text-[3.5rem] md:text-[3rem] text-[2.5rem] bg-gradient-to-r from-gray-500 to-gray-100 text-transparent bg-clip-text font-semibold lg:pl-3">
            Silver:
          </h2>
          <div className="flex flex-col justify-center items-start lg:pr-24 p-5">
            <img
              src="/THE.png"
              className="lg:w-[6rem] md:w-[4rem] w-[4rem]"
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
        </div> */}
        {/* <div className="flex max-sm:flex-col max-sm:justify-center sm:justify-between items-center rounded-2xl bg-[#1f1f1f] lg:w-[75%] w-full p-3 mt-10 max-lg:px-10 ">
          <h2 className="lg:text-[3.5rem] md:text-[3rem] text-[2.5rem] text-white font-semibold lg:pl-3">
            Associate
          </h2>
          <a href="https://cie.iiit.ac.in/" target="_blank">
            <img src="IIIT-CIE-Logo.png" alt="" className="h-[10rem]" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Sponsors;