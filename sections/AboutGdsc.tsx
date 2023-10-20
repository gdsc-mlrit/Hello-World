export const AboutGdsc = () => {
  return (
    <div className="border border-[#99f94e] rounded-t-[12vw] rounded-b-[5vw] h-[90%] w-[90%] bg-[#1f1f1f] flex justify-center items-center flex-col max-sm:py-10">
      <h2 className="sm:hidden text-[#99f94e] max-w-[85%] text-[2.2rem] font-semibold font-poppins py-2 pb-5">WHO ARE WE?</h2>
      <img src="/gdsclogo.png" alt="" className="w-[85%] pb-[7%] pt-[3%]"/>
      <p className="text-white max-sm:text-[1.3rem] max-sm:text-left w-[85%] text-[2rem] max-lg:pt-10 text-justify max-sm:pt-10">
        GDSC, a global Google endeavor, nurtures an exuberant worldwide
        community of budding student developers. Spearheaded by students
        themselves, GDSCs provide a dedicated haven for passionate learning and
        joint exploration across an array of tech domains, from software
        development to machine learning and beyond. GDSC MLRIT is one such
        chapter established in MLR Institute of Technology to start a new
        pursuit of technology in campus.
      </p>
    </div>
  );
};
