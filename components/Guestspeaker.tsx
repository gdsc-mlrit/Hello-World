import React from "react";

const Guestspeaker = () => {
  return (
    <div className="flex flex-col justify-center items-center py-8 bg-[#151515]">
      <div className="flex flex-col">
        <div className="flex flex-col justify-center">
          <p className=" text-limee leading-[50px] text-center text-[40px] md:text-[80px] md:leading-[80px] lg:text-[100px] lg:leading-[100px] pb-5 font-bold">
            Guest Speaker
          </p>
        </div>
        <div className="flex flex-col py-10 rounded-full justify-center items-center">
          <img
            className="max-sm:w-[180px] md:w-[240px] lg:w-[410px] border-4 border-limee rounded-full"
            src="/guestspeaker.jpeg"
            alt=""
          />
        </div>
        <div>
          <p className="text-white  text-center text-[30px] md:text-[40px] lg:text-[50px]  font-bold">
            AFNAN ABDUL VASAY
          </p>
        </div>
        <div className="">
          <p className="text-limee text-center text-[20px] md:text-[30px] lg:text-[40px] font-light">
            GITHUB CAMPUS EXPERT
          </p>
        </div>
      </div>
    </div>
  );
};

export default Guestspeaker;