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

        <div className="flex flex-col justify-center items-center gap-10 w-full">
          <div className="flex flex-col justify-center items-center w-full  max-md:gap-5">
            <h2 className="lg:text-[3rem] md:text-[2.5rem] text-[2rem]  text-white  font-semibold lg:pl-3 m-auto">
              Gold Partner
            </h2>
            <div className="flex gap-10 md:w-[75%] justify-center rounded-3xl p-10 bg-[#1f1f1f]">
              <a
                href="https://www.jdoodle.com/?utm_source=Hello+World+GDSC&utm_medium=Event&utm_campaign=Hackathon+Sponsorship"
                target="_blank"
                className="flex items-center bg-white h-[10rem]"
              >
                <img src="/JD_logo.png" alt="" className="w-[22rem]" />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-full max-md:gap-5">
            <h2 className="lg:text-[3rem] md:text-[2.5rem] text-[2rem] font-semibold lg:pl-3 text-white">
              Powered By
            </h2>
            <div className="flex flex-wrap gap-10 md:w-[75%] justify-center rounded-3xl p-10 bg-[#1f1f1f] m-auto">
              <a
                href="https://hack2skill.com/"
                target="_blank"
                className="py-[2rem] bg-white px-[3rem] "
              >
                <img src="/h2s.png" alt="" className="w-[16rem]" />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-full max-md:gap-5">
            <h2 className="lg:text-[3rem] md:text-[2.5rem] text-[2rem] font-semibold lg:pl-3 text-white">
              Hiring Partner
            </h2>
            <div className="flex flex-wrap gap-10 md:w-[75%] justify-center rounded-3xl p-10 bg-[#1f1f1f] m-auto">
              <a
                href="https://www.bluelearn.in/"
                target="_blank"
                className=" bg-white "
              >
                <img src="/bluelearn.png" alt="" className="w-[22rem]" />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-full  max-md:gap-5">
            <h2 className="lg:text-[3rem] md:text-[2.5rem] text-[2rem] font-semibold lg:pl-3 text-white">
              Bronze Partner
            </h2>
            <div className="flex flex-wrap gap-10 md:w-[75%] justify-center rounded-3xl p-10 bg-[#1f1f1f] m-auto">
              <a
                href="https://www.taskade.com/"
                target="_blank"
                className="bg-white flex items-center h-[10rem] p-[1rem]"
              >
                <img src="taskade.png" alt="" className="w-[20rem]" />
              </a>
              <a
                href="https://www.slido.com/"
                target="_blank"
                className="flex items-center bg-white px-5 h-[10rem] md:px-[3.1rem]"
              >
                <img src="/slido.png" alt="" className="w-[18rem]" />
              </a>
              <a
                href="https://company.wolfram.com/press-center/wolfram-corporate/https://interviewbuddy.net/"
                target="_blank"
                className="flex items-center bg-white h-[10rem] md:px-5"
              >
                <img
                  src="wolfram2.png"
                  alt=""
                  className="w-[22rem] md:h-[10rem]"
                />
              </a>

              <a
                href="https://beeceptor.com/?utm_source=gdsc"
                target="_blank"
                className="flex items-center p-5 bg-white h-[10rem]"
              >
                <img src="beer.svg" alt="" className="w-[22rem]" />
              </a>
              <a
                href="https://gen.xyz/"
                target="_blank"
                className="bg-white px-[3rem] py-[0.5rem]"
              >
                <img src="/xyz.png" alt="" className="w-[15rem]" />
              </a>
              <a
                href="https://www.axure.com/"
                target="_blank"
                className="flex items-center bg-white max-sm:py-4 h-[10rem]"
              >
                <img src="/axure_logo.png" alt="" className="w-[22rem]" />
              </a>

              <a
                href="https://rosenfeldmedia.com"
                target="_blank"
                className="bg-white flex items-center h-[10rem]"
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
              <a
                href="https://cie.iiit.ac.in/"
                target="_blank"
                className="py-[1rem] bg-white"
              >
                <img src="IIIT-CIE-Logo.png" alt="" className="w-[22rem]" />
              </a>
              <a
                href="https://flutteruniversity.gitbook.io/docs/"
                target="_blank"
                className="flex justify-center items-center px-1 bg-white"
              >
                <img
                  src="/flutteruniversity.png"
                  alt=""
                  className="w-[5rem] h-[5rem]"
                />
                <h1 className="text-3xl font-semibold">Flutter University</h1>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center w-full max-md:gap-5">
            <h2 className="lg:text-[3rem] md:text-[2.5rem] text-[2rem] font-semibold lg:pl-3 text-white">
              Community Partner
            </h2>
            <div className="flex flex-wrap gap-10 md:w-[75%] justify-center items-center rounded-3xl p-10 bg-[#1f1f1f] m-auto">
              <a href="" target="_blank" className="flex items-center">
                <img src="/deepverse.jpeg" alt="" className="w-[18rem]" />
              </a>
              <a
                href="https://codewavehub.tech"
                target="_blank"
                className="flex items-center bg-white w-[22rem] h-[10rem]"
              >
                <img src="cwh.png" alt="" className="w-[22rem]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
