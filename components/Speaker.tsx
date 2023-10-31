import React from "react";

const Speaker = () => {
  return (
    <div className="md:hidden w-full px-4 flex flex-col gap-2 py-4 bg-[#151515]">
      <h1 className="text-4xl font-poppins font-semibold text-white m-auto pr-5">
        Meet the <br/>
        <span className="text-limee text-6xl">Speakers</span>
      </h1>
      <div className="flex flex-col justify-center items-center pt-24 relative pr-10">
        <img className=" overflow-hidden w-[200px]" src="/Dine.png" alt="Dinesh" />
        <div className="w-96 h-14 p-4 text-white text-center text-3xl font-bold">
          Dinesh Nalam
        </div>
        <div className="text-center  z-20 relative">
          <span className="text-limee p-0 text-xl font-semibold leading-10">
            Lead, GDSC MLRIT
            <br />
          </span>
          <span className="text-white text-md font-normal leading-relaxed">
            EY Scholarship Finalist
            <br />
            State Level Pitch Fest Winner
          </span>
        </div>
        <div className="flex absolute right-0 w-[48px] justify-center">
          <p className="-rotate-90  text-limee text-6xl font-bold">
            STARTUPS
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pt-24 relative pr-10">
        {/* <img className="w-96 h-96 rounded-full bg-[#b7b7b7]" src="/dinesh.png" /> */}
        <img
          className=" overflow-hidden w-[200px]"
          src="/Sherlock.png"
          alt=""
        />
        <div className="w-96 h-14 p-4 text-white text-center text-3xl font-bold">
          Sri Nikhil
        </div>
        <div className="text-center z-20 relative">
          <span className="text-limee p-0 text-xl font-smibold leading-10">
            Design Lead, GDSC MLRIT
            <br />
          </span>
          <span className="text-white text-md font-normal leading-relaxed">
            Most Valuable Student, HoneSt.
            <br />
            UI/UX Hyderabad Community
          </span>
        </div>
        <div className="flex absolute right-0 w-[48px] px-4 justify-center">
          <p className="-rotate-90  text-limee text-6xl font-bold">
            DESIGN
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pt-24 relative pr-10">
        {/* <img className="w-96 h-96 rounded-full bg-[#b7b7b7]" src="/dinesh.png" /> */}
        <img className=" overflow-hidden w-[200px]" src="/Reaper.png" alt="Adhitya" />
        <div className="w-96 h-14 p-4  text-white text-center text-3xl font-bold">
          Adithya Vardhan
        </div>
        <div className="text-center  z-20 relative">
          <span className="text-limee p-0 text-xl font-bold leading-10">
            Tech Lead, GDSC MLRIT
            <br />
          </span>
          <span className="text-white text-md font-normal leading-relaxed">
            Founder & CEO, HITO Tech Pvt Ltd
            <br />
            Founder, CloudTax
          </span>
        </div>
        <div className="flex absolute right-0 w-[48px] px-0 flex-column justify-center">
          <p className="-rotate-90  text-limee text-6xl font-bold">
            TECH
          </p>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
