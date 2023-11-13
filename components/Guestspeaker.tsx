import React from "react";

const Guestspeaker = () => {
  return (
    <div className="flex flex-col justify-center items-center py-8 bg-[#151515]">
      <div className="flex flex-col">
        <div className="flex flex-col justify-center relative">
          <p className="leading-[50px] text-center text-[40px] md:text-[80px] md:leading-[80px] lg:text-[80px] lg:leading-[80px] pb-5 font-bold relative text-[#151515] special2">
            Guest Speaker
          </p>
          <p className="leading-[50px] text-center text-[40px] md:text-[80px] md:leading-[80px] lg:text-[80px] lg:leading-[80px] absolute top-0 bottom-0 left-0 right-0 m-auto text-limee font-bold translate-y-[-8%]">
            Guest Speaker
          </p>
        </div>
        <div className="flex flex-col py-5  rounded-full justify-center items-center">
          <img
            className="max-sm:w-[180px] md:w-[210px] lg:w-[250px] border-4 border-limee rounded-full"
            src="/guestspeaker.jpeg"
            alt=""
          />
        </div>
        <div>
          <p className="text-white text-center text-[30px] md:text-[30px] lg:text-[50px] font-bold leading-10 pt-3">
            AFNAN ABDUL VASAY <br />
            {/* <span className="text-limee text-center text-[20px] md:text-[25px] lg:text-[30px] font-light">
              GITHUB CAMPUS EXPERT
            </span> */}
          </p>
        </div>
        <div className="">
          <p className="text-limee text-center text-[20px] md:text-[25px] lg:text-[30px] font-light">
            GITHUB CAMPUS EXPERT
          </p>
        </div>
      </div>
    </div>
  );
};

export default Guestspeaker;
