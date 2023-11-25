import React from "react";

const Sponsors = () => {
  return (
    <div className=" w-full px-6 bg-[#151515] py-10 ">
      <div className="text-center h-auto flex flex-col items-center m-auto">
        <div className="relative">
          <h1 className="text-[#151515] leading-[40px] text-center text-[40px] md:text-[60px] md:leading-[60px] lg:text-[80px] lg:leading-[80px] font-bold mb-10 special2 translate-x-1 translate-y-1">
            Our Sponsors
          </h1>
          <h1 className="text-limee leading-[40px] text-center text-[40px] md:text-[60px] md:leading-[60px] lg:text-[80px] lg:leading-[80px] font-bold mb-10 absolute top-0">
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
        <div className="flex flex-col justify-center items-center gap-10 w-full">
          <div className="flex flex-col justify-center items-center w-full  max-md:gap-5">
            <h2 className="lg:text-[3rem] md:text-[2.5rem] text-[2rem]  text-white  font-semibold lg:pl-3 m-auto">
              Gold Partner
            </h2>
            <div className="flex gap-10 md:w-[75%] justify-center rounded-3xl p-10 bg-[#1f1f1f]">
              <a
                href="https://www.jdoodle.com/?utm_source=Hello+World+GDSC&utm_medium=Event&utm_campaign=Hackathon+Sponsorship"
                target="_blank"
                className="flex items-center p-5"
              >
                <img src="/JD_logo.png" alt="" className="w-[22rem] " />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-full  max-md:gap-5">
            <h2 className="lg:text-[3rem] md:text-[2.5rem] text-[2rem] font-semibold lg:pl-3 text-white">
              Bronze Partner
            </h2>
            <div className="flex flex-wrap gap-10 md:w-[75%] justify-center rounded-3xl p-10 bg-[#1f1f1f] m-auto">
              <a
                href="https://beeceptor.com/?utm_source=gdsc"
                target="_blank"
                className="flex items-center p-5 bg-white"
              >
                <img src="beer.svg" alt="" className="w-[22rem]" />
              </a>

              <a
                href="https://interviewbuddy.net/"
                target="_blank"
                className="bg-white"
              >
                <img src="iblogo.png" alt="" className="w-[22rem]" />
              </a>

              <a
                href="https://company.wolfram.com/press-center/wolfram-corporate/https://interviewbuddy.net/"
                target="_blank"
                className="flex items-center bg-white px-5"
              >
                <img src="wolfram2.png" alt="" className="w-[22rem]" />
              </a>
              <a
                href="https://www.axure.com/"
                target="_blank"
                className="flex items-center bg-white max-sm:py-4"
              >
                <img src="/axure_logo.png" alt="" className="w-[22rem]" />
              </a>
              <a
                href="https://www.slido.com/"
                target="_blank"
                className="flex items-center bg-white max-sm:py-4 px-[2rem] py-[2rem]"
              >
                <img src="/slido.png" alt="" className="w-[20rem]" />
              </a>
              <a
                href="https://rosenfeldmedia.com"
                target="_blank"
                className="bg-white flex items-center"
              >
                <img src="rosenfeldmedia.webp" alt="" className="w-[22rem]" />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-full max-md:gap-5">
            <h2 className="lg:text-[3rem] md:text-[2.5rem] text-[2rem] font-semibold lg:pl-3 text-white">
              Knowledge Partner
            </h2>
            <div className="flex flex-wrap gap-10 md:w-[75%] justify-center rounded-3xl p-10 bg-[#1f1f1f] m-auto">
              <a href="https://cie.iiit.ac.in/" target="_blank">
                <img src="IIIT-CIE-Logo.png" alt="" className="w-[22rem]" />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full max-md:gap-5">
            <h2 className="lg:text-[3rem] md:text-[2.5rem] text-[2rem] font-semibold lg:pl-3 text-white">
              Community Partner
            </h2>
            <div className="flex flex-wrap gap-10 md:w-[75%] justify-center rounded-3xl p-10 bg-[#1f1f1f] m-auto">
              <a
                href="https://www.slido.com/"
                target="_blank"
                className="flex items-center bg-white max-sm:py-4"
              >
                <img src="/deepverse.jpeg" alt="" className="w-[20rem]" />
              </a>
            </div>
          </div>
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
