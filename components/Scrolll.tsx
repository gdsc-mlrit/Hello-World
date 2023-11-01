import React from "react";

const Scrolll = () => {
  return (
    <div className=" w-full px-6 bg-[#151515] py-10 md:pt-[150px]">
      <div className="text-center h-auto flex flex-col items-center">
        <div>
          <h1 className="text-limee leading-[40px] text-center text-[40px] md:text-[60px] md:leading-[60px] lg:text-[80px] lg:leading-[80px] font-bold">
            Our Sponsers
          </h1>
        </div>

        <div className=" w-full flex-nowrap py-16 flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li className="px-8">
              <img
                src="/Part1.png"
                className="lg:w-[130px] md:w-[175px] w-[100px]"
                alt="StudenTribe"
              />
            </li>
            <li className="px-8">
              <img
                src="/Part2.png"
                className="lg:w-[130px] md:w-[175px] w-[100px]"
                alt="Git"
              />
            </li>
            <li className="px-8">
              <div className="flex flex-col justify-center items-center gap-2 md:gap-4">
                <img
                  src="/THE.png"
                  alt=""
                  className="lg:w-[130px] md:w-[150px] w-[75px]"
                />
                <img
                  src="/Part3.png"
                  alt=""
                  className="lg:w-[140px] md:w-[175px] w-[100px]"
                />
                <img
                  src="/LEAGUE.png"
                  alt=""
                  className="lg:w-[130px] md:w-[150px] w-[75px]"
                />
              </div>
            </li>
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li className="px-8">
              <img
                src="/Part1.png"
                className="lg:w-[130px] md:w-[175px] w-[100px]"
                alt="StudenTribe"
              />
            </li>
            <li className="px-8">
              <img
                src="/Part2.png"
                className="lg:w-[130px] md:w-[175px] w-[100px]"
                alt="Git"
              />
            </li>
            <li className="px-8">
              <div className="flex flex-col justify-center items-center gap-2 md:gap-4">
                <img
                  src="/THE.png"
                  alt=""
                  className="lg:w-[130px] md:w-[125px] w-[75px]"
                />
                <img
                  src="/Part3.png"
                  alt=""
                  className="lg:w-[140px] md:w-[150px] w-[100px]"
                />
                <img
                  src="/LEAGUE.png"
                  alt=""
                  className="lg:w-[130px] md:w-[125px] w-[75px]"
                />
              </div>
            </li>
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li className="px-8">
              <img
                src="/Part1.png"
                className="lg:w-[130px] md:w-[175px] w-[100px]"
                alt="StudenTribe"
              />
            </li>
            <li className="px-8">
              <img
                src="/Part2.png"
                className="lg:w-[130px] md:w-[175px] w-[100px]"
                alt="Git"
              />
            </li>
            <li className="px-8">
              <div className="flex flex-col justify-center items-center gap-2 md:gap-4">
                <img
                  src="/THE.png"
                  alt=""
                  className="lg:w-[130px] md:w-[150px] w-[75px]"
                />
                <img
                  src="/Part3.png"
                  alt=""
                  className="lg:w-[140px] md:w-[175px] w-[100px]"
                />
                <img
                  src="/LEAGUE.png"
                  alt=""
                  className="lg:w-[130px] md:w-[150px] w-[75px]"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Scrolll;
