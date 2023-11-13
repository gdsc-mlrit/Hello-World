const Explore = () => {
  return (
    <div className=" flex flex-col justify-center items-center pb-16">
      <div className="flex items-center justify-center relative">
        <h1 className="text-[#dfdfdf] lg:text-[8rem] md:text-[6rem] text-[4rem] leading-[4rem] max-sm:pl-10 font-dmserif pt-24 lg:pb-[9rem] md:pb-[5rem] pb-[2rem] z-10">
          Explore{" "}
          <span className="text-limee max-md:text-[1.2em]">Domains</span>.
        </h1>
        <img
          src="/Layer_1.svg"
          alt=""
          className="absolute top-0 lg:w-[400px] md:w-[300px] w-[200px] max-sm:translate-x-[35%]"
        />
      </div>

      <h3 className="lg:text-4xl md:text-xl text-semibold text-limee z-10">
        @ <span className="text-white">MLR Institute of Technology,</span>{" "}
        Hyderabad
      </h3>
    </div>
  );
};

export default Explore;
