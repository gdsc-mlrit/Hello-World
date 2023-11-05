const Dinesh = () => {
  return (
    <main className="lg:w-[75%] w-full max-sm:hidden">
      <div className="border-l-[0.6rem] border-limee pl-[3rem] relative">
        <h1 className="xl:text-[4.5rem] xl:leading-[6rem] lg:text-[3.5rem] lg:leading-[5rem] text-[3rem] leading-[4rem] font-bold text-white ">
          Explore <br />
          <span className="text-limee text-[1.8em]">Startups</span>
        </h1>
        <img
          src="/gray_roc.svg"
          alt="startup logo"
          className="absolute top-0 left-0 lg:w-[240px] w-[180px] translate-x-[180%]"
        />
      </div>
      <div className="flex justify-between">
        <div className="text-white text-3xl flex flex-col justify-center gap-2 pl-[3.6rem]">
          <p>What are Startups ?</p>
          <p>Startup Lifecycle</p>
          <p>Market Research</p>
          <p>How to pitch?</p>
          <p>How to get startup ideas?</p>
        </div>
        <div className="flex flex-col justify-center items-center text-white relative pr-[6rem] translate-y-[-22%]">
          <img
            src="/profiles/Dine.png"
            alt="Dinesh"
            className="lg:w-[250px] w-[180px]"
          />
          <h2 className="lg:text-4xl text-3xl font-bold">Dinesh Nalam</h2>
          <h3 className="lg:text-xl text-lg font-semibold text-limee">
            Lead, GDSC MLRIT
          </h3>
          <p className="text-md">EY Scholarship Finalist</p>
          <p className="text-md">State Level Pitch Fest winner</p>
          <h1 className="absolute text-limee lg:text-[6rem] text-[5rem] font-bold -rotate-90 left-0 translate-x-[28%]">
            SPEAKER
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Dinesh;
