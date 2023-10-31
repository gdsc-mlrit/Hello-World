import React from "react";

const AboutGdsc2 = () => {
  return (
    <div className="border-t border-b sm:border border-[#99f94e] sm:rounded-t-[12em] sm:rounded-b-[5em] w-[75%] max-sm:w-full bg-[#1f1f1f] flex justify-center items-center flex-col relative">
      <h2 className="bg-limee sm:text-[2.2rem] text-[1.4rem] font-semibold font-poppins py-2 px-[10vw] absolute top-0 translate-y-[-50%] sm:rounded-2xl rounded-lg">
        WHO ARE WE?
      </h2>
      <div className="flex flex-col justify-center w-[75%] gap-10 sm:py-[5rem] sm:pt-[7rem] py-[2rem]">
        <img src="/gdsclogo.png" alt="" className="sm:py-5 pt-4" />
        <p className="text-white sm:text-2xl text-md text-justify">
          GDSC, a global Google endeavor, nurtures an exuberant worldwide
          community of budding student developers. Spearheaded by students
          themselves, GDSCs provide a dedicated haven for passionate learning
          and joint exploration across an array of tech domains, from software
          development to machine learning and beyond. GDSC MLRIT is one such
          chapter established in MLR Institute of Technology to start a new
          pursuit of technology in campus.
        </p>
      </div>
    </div>
  );
};

export default AboutGdsc2;
