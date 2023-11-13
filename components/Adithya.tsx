const Adithya = () => {
  return (
    <main className="lg:w-[75%] w-full max-sm:hidden">
      <div className="border-l-[0.6rem] border-limee pl-[3rem] relative">
        <div className="xl:text-[5.25rem] xl:leading-[6rem] lg:text-[4.5rem] lg:leading-[5rem] text-[3rem] leading-[4rem] font-semibold text-white pb-5">
          Explore <br />
          <div className="relative">
            <h1 className="text-[#151515] text-[1.8em] special translate-x-1 translate-y-2">
              Tech
            </h1>
            <h1 className="text-limee text-[1.8em] absolute top-0">Tech</h1>
          </div>
        </div>
        <img
          src="/Vector.svg"
          alt="tech logo"
          className="absolute top-0 left-0 lg:w-[210px] w-[180px] translate-x-[210%]"
        />
      </div>
      <div className="flex justify-between">
        <div className="text-white text-3xl flex flex-col pt-12 justify-center gap-1">
          <p>Intro to Computer Science ?</p>
          <p>Software Development Lifecycle</p>
          <p>Various Computer Languages</p>
          <p>Generative AI</p>
          <p>Open Source and Git</p>
        </div>
        <div className="flex flex-col justify-center items-center text-white relative pr-[6rem] translate-y-[-15%] translate-x-[0%]">
          <img
            src="/profiles/Reaper.png"
            alt="reaper"
            className="lg:w-[210px] w-[180px]"
          />
          <h2 className="text-3xl font-bold pt-3">Adithya Vardhan</h2>
          <h3 className="text-lg font-semibold text-limee">
            Tech Lead, GDSC MLRIT
          </h3>
          <p className="text-sm">Founder & CEO, HITO Tech Pvt Ltd.</p>
          <p className="text-sm">Founder, CloudTax</p>
          <h1 className="absolute text-[#1f1f1f] special border-limee lg:text-[5.2rem] text-[5rem] font-bold -rotate-90 left-0 translate-x-[30%] translate-y-[-5%]">
            SPEAKER
          </h1>
          <h1 className="absolute text-limee lg:text-[5.2rem] text-[5rem] font-bold -rotate-90 left-0 translate-x-[28%]">
            SPEAKER
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Adithya;
