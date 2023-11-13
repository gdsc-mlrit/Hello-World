const Dinesh = () => {
  return (
    <main className="lg:w-[75%] w-full max-sm:hidden">
      <div className="border-l-[0.6rem] border-limee pl-[3rem] relative">
        <div className="xl:text-[5.25rem] xl:leading-[6rem] lg:text-[4.5rem] lg:leading-[5rem] text-[3rem] leading-[4rem] font-semibold text-white font-dmsans">
          Explore <br />
          <span className="text-[1.5em] text-limee">Startups</span>
        </div>
        <img
          src="/gray_roc.svg"
          alt="startup logo"
          className="absolute top-0 left-0 lg:w-[240px] w-[180px] translate-x-[210%]"
        />
      </div>
      <div className="flex justify-between">
        <div className="text-white text-3xl flex flex-col pt-12 justify-center gap-1">
          <p>What are Startups ?</p>
          <p>Startup Lifecycle</p>
          <p>Market Research</p>
          <p>How to pitch?</p>
          <p>How to get startup ideas?</p>
        </div>
        <div className="flex flex-col justify-center items-center text-white relative pr-[6rem] translate-y-[-15%] translate-x-[-10%]">
          <img
            src="/profiles/Dine.png"
            alt="Dinesh"
            className="lg:w-[210px] w-[180px]"
          />
          <h2 className="text-3xl font-bold pt-3">Dinesh Nalam</h2>
          <h3 className="text-lg font-semibold text-limee">Lead, GDSC MLRIT</h3>
          <p className="text-sm">EY Scholarship Finalist</p>
          <p className="text-sm">State Level Pitch Fest winner</p>
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

export default Dinesh;
