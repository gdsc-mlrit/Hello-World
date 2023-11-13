import React from "react";

const Speaker = () => {
  return (
    <div className="md:hidden w-full px-4 flex flex-col gap-2 py-4 bg-[#1f1f1f]">
      <div className="text-4xl font-poppins font-semibold text-white m-auto pr-5">
        Meet the <br />
        <div className="text-limee text-6xl relative">
          <h1 className="special2 translate-x-1 translate-y-1 text-[#1f1f1f]">
            Speaker
          </h1>
          <h1 className="absolute top-0">Speaker</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pt-24 pr-10 text-white relative">
        <img
          className=" overflow-hidden w-[200px]"
          src="/profiles/Dine.png"
          alt="Dinesh"
        />
        <h1 className="text-3xl font-bold pt-3">Dinesh Nalam</h1>
        <p className="text-limee text-lg">Lead, GDSC MLRIT</p>
        <p>EY Scholarship Finalist</p>
        <p>State Level Pitch Fest Winner</p>
        <div className="flex absolute right-0 w-[48px] justify-center">
          <p className="-rotate-90  text-[#1f1f1f] text-6xl font-bold special2">
            STARTUPS
          </p>
        </div>
        <div className="flex absolute right-0 w-[48px] justify-center  translate-x-[-5%] translate-y-[5%]">
          <p className="-rotate-90  text-limee text-6xl font-bold">STARTUPS</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pt-24 relative pr-10 text-white">
        <img
          className=" overflow-hidden w-[200px]"
          src="/profiles/Sherlock.png"
          alt=""
        />
        <h1 className="text-3xl font-bold pt-3">Sri Nikhil</h1>
        <p className="text-limee text-lg">Design Lead, GDSC MLRIT</p>
        <p>ost Valuable Student, HoneSt.</p>
        <p>UI/UX Hyderabad Community</p>
        <div className="flex absolute right-0 w-[48px] justify-center">
          <p className="-rotate-90  text-[#1f1f1f] text-6xl font-bold special2">
            Design
          </p>
        </div>
        <div className="flex absolute right-0 w-[48px] justify-center  translate-x-[-5%] translate-y-[5%]">
          <p className="-rotate-90  text-limee text-6xl font-bold">Design</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pt-24 relative pr-10 text-white">
        <img
          className=" overflow-hidden w-[200px]"
          src="/profiles/Reaper.png"
          alt="Adhitya"
        />
        <h1 className="text-3xl font-bold pt-3">Adithya Vardhan</h1>
        <p className="text-limee text-lg">Tech Lead, GDSC MLRIT</p>
        <p>Founder & CEO, HITO Tech Pvt Ltd</p>
        <p>Founder, CloudTax</p>
        <div className="flex absolute right-0 w-[48px] justify-center">
          <p className="-rotate-90  text-[#1f1f1f] text-6xl font-bold special2">
            Tech
          </p>
        </div>
        <div className="flex absolute right-0 w-[48px] justify-center  translate-x-[-5%] translate-y-[5%]">
          <p className="-rotate-90  text-limee text-6xl font-bold">Tech</p>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
