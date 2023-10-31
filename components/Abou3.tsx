import React from "react";

const About = () => {
  return (
    <div className="hidden md:flex min-h-screen bg-white pt-10">
      <div className="flex flex-row items-center w-full">
        <div className="w-full flex flex-col">
          <div className=" h-auto p-6 flex flex-row justify-start pb-0 relative">
            <div className="leading-[100px]">
              <span className="pl-[3rem] text-[100px] leading-[100px] font-bold text-stone-900">
                Explore
                <br />
              </span>
              <span className="pl-[2.9rem] text-[180px] font-bold  text-slate-700">
                Startups
              </span>
            </div>
            <div className="absolute p-0 right-[17rem] z-[0]">
              <img className="h-[330px]" src="/assets/Vector.png" alt="" />
            </div>
          </div>

          <div className="flex flex-row justify-between px-0 pl-5">
            <div className="p-16 pr-0 ">
              <div className="pb-4">
                <span className="text-stone-900 text-start text-4xl font-normal font-['Google Sans'] leading-10">
                  What are
                </span>
                <span className="text-slate-500 text-4xl font-normal font-['Google Sans'] leading-10">
                  {" "}
                </span>
                <span className="text-slate-700 text-4xl font-medium font-['Google Sans'] leading-10">
                  Startups ?
                </span>
              </div>
              <div className="pb-4">
                <span className="text-stone-900 text-start text-4xl font-normal font-['Google Sans'] leading-10">
                  Startup Lifecycle
                </span>
              </div>
              <div className="pb-4">
                <span className="text-stone-900 text-start text-4xl font-normal font-['Google Sans'] leading-10">
                  Market Research
                </span>
              </div>
              <div className="pb-4">
                <span className="text-stone-900 text-start text-4xl font-normal font-['Google Sans'] leading-10">
                  How to Pitch?
                </span>
              </div>
              <div className="pb-4">
                <span className="text-stone-900  text-start text-4xl font-normal font-['Google Sans'] leading-10">
                  How to get startup ideas?
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center px-0 p-0">
              {/* <img className="w-96 h-96 rounded-full bg-[#b7b7b7]" src="/dinesh.png" /> */}
              <img src="/Dine.png" alt="" />
              <div className="w-96 h-14 p-4 text-slate-700 text-center text-4xl font-bold font-['Google Sans']">
                Dinesh Nalam
              </div>
              <div className="text-center  z-20 relative">
                <span className="text-slate-700 p-0 text-2xl font-bold font-['Google Sans'] leading-10">
                  Lead, GDSC MLRIT
                  <br />
                </span>
                <span className="text-slate-700 text-xl font-normal font-['Google Sans'] leading-relaxed">
                  EY Scholarship Finalist
                  <br />
                  State Level Pitch Fest Winner
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center w-[48px] px-8 pt-[20rem] justify-center bg-white">
          <p className="-rotate-90 text-slate-700 text-8xl opacity-60 font-bold font-['Google Sans']">
            SPEAKER
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
