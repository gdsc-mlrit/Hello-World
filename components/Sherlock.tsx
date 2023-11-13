const Sherlock = () => {
  return (
    <main className="lg:w-[75%] w-full max-sm:hidden">
      <div className="border-r-[0.6rem] border-limee pr-[3rem] relative">
        <div className="xl:text-[5.25rem] xl:leading-[6rem] lg:text-[4.5rem] lg:leading-[5rem] text-[3rem] leading-[4rem] font-semibold text-white font-dmsans text-right">
          Explore <br />
          <span className="text-limee text-[1.5em]">Design</span>
        </div>
        <img
          src="/gray_design.svg"
          alt="design logo"
          className="absolute top-0 left-0 lg:w-[240px] w-[180px] translate-x-[180%]"
        />
      </div>
      <div className="flex justify-between flex-row-reverse">
        <div className="text-white text-3xl flex flex-col justify-center gap-1 text-right">
          <p>What is Design?</p>
          <p>Design as a Career</p>
          <p>Elements of Graphic Design</p>
          <p>Graphic Design Principles</p>
          <p>Intro to UI/UX Design</p>
        </div>
        <div className="flex flex-col justify-center items-center text-white relative pl-[6rem] translate-y-[-22%]">
          <img
            src="/profiles/Sherlock.png"
            alt="sherlock"
            className="lg:w-[210px] w-[180px]"
          />
          <h2 className="text-3xl font-bold pt-3">Sri Nikhil</h2>
          <h3 className="text-lg font-semibold text-limee">
            Design Lead, GDSC MLRIT
          </h3>
          <p className="text-sm">Most Valuable Student, HoneSt.</p>
          <p className="text-sm">UI/UX Hyderabad Community</p>
          {/* <h1 className="absolute text-limee lg:text-[6rem] text-[5rem] font-bold -rotate-90 right-0 translate-x-[-28%]">
            SPEAKER
          </h1> */}
          <h1 className="absolute text-[#1f1f1f] special border-limee lg:text-[5.2rem] text-[5rem] font-bold -rotate-90 right-0 translate-x-[-30%] translate-y-[-5%]">
            SPEAKER
          </h1>
          <h1 className="absolute text-limee lg:text-[5.2rem] text-[5rem] font-bold -rotate-90 right-0 translate-x-[-28%]">
            SPEAKER
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Sherlock;
