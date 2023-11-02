const Adithya = () => {
  return (
    <main className="lg:w-[75%] w-full max-sm:hidden">
      <div className="border-l-[0.6rem] border-limee pl-[3rem] relative">
        <h1 className="xl:text-[4.5rem] xl:leading-[6rem] lg:text-[3.5rem] lg:leading-[5rem] text-[3rem] leading-[4rem] font-bold text-white ">
          Explore <br />
          <span className="text-limee text-[1.8em]">Tech</span>
        </h1>
        <img
          src="/gray_tech.svg"
          alt="tech logo"
          className="absolute top-0 left-0 lg:w-[240px] w-[180px] translate-x-[180%]"
        />
      </div>
      <div className="flex justify-between">
        <div className="text-white text-3xl flex flex-col justify-center gap-2 pl-[3.6rem]">
          <p>Intro to Computer Science ?</p>
          <p>Software Development Lifecycle</p>
          <p>Various Computer Languages</p>
          <p>Generative AI</p>
          <p>Open Source and Git</p>
        </div>
        <div className="flex flex-col justify-center items-center text-white relative pr-[6rem] translate-y-[-22%]">
          <img
            src="/Reaper.png"
            alt="reaper"
            className="lg:w-[250px] w-[180px]"
          />
          <h2 className="lg:text-4xl text-3xl font-bold">Adithya Vardhan</h2>
          <h3 className="lg:text-xl text-lg font-semibold text-limee">
            Tech Lead, GDSC MLRIT
          </h3>
          <p className="text-md">Founder & CEO, HITO Tech Pvt Ltd.</p>
          <p className="text-md">Founder, CloudTax</p>
          <h1 className="absolute text-limee lg:text-[6rem] text-[5rem] font-bold -rotate-90 left-0 translate-x-[28%]">
            SPEAKER
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Adithya;
