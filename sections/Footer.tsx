const Footer = () => {
  return (
    <div className="sm:w-[75%] flex justify-between sm:py-24 pt-14 pb-14 max-lg:flex-col max-lg:items-center">
      <div className="lg:text-[1.5rem] md:text-[1.2rem] text-[1rem] leading-[4em]">
        <p className=" text-white">
          Liked Our Event? Don't be shy to <br />
        </p>
        <div className="relative">
          <h1 className="sm:text-[6em] text-[5em] text-[#1f1f1f] font-bold font-saira special2 translate-x-2 translate-y-1">
            Contact Us
          </h1>
          <h1 className="sm:text-[6em] text-[5em] text-limee font-bold font-saira absolute top-0">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="flex lg:flex-col lg:gap-3 gap-[3rem] lg:justify-center justify-between lg:text-2xl md:text-xl text-md text-white sm:pr-10 max-sm:pt-4 lg:pl-10 lg:pt-16">
        <a href="mailto:dineshnalam03@gmail.com">
          <p className="flex lg:gap-6 gap-2 hover:text-limee">
            <img src="/mail.svg" alt="" />
            Mail
          </p>
        </a>

        {/* <p className="flex sm:gap-6 gap-2 hover:text-limee">
            <img src="/twitter.svg" alt="" />
            Twitter
          </p> */}
        <a href="https://www.linkedin.com/company/gdscmlrit/">
          <p className="flex lg:gap-6 gap-2 hover:text-limee">
            <img src="/linkedin.svg" alt="" />
            Linked In
          </p>
        </a>
      </div>
      <div className="flex flex-col justify-center gap-5 sm:gap-3 text-white md:pr-10 max-sm:pt-6 max-lg:pt-12 pt-5">
        <h3 className="lg:text-2xl max-lg:hidden text-xl ">Phone:</h3>
        <p className="lg:text-xl md:text-lg text-md">+91 70950 91735</p>
        <p className="lg:text-xl md:text-lg text-md ">+91 87908 21615</p>
      </div>
    </div>
  );
};

export default Footer;
