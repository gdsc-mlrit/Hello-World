const Footer = () => {
  return (
    <div className="sm:w-[75%] flex lg:justify-between sm:py-24 py-14 max-lg:flex-col max-lg:items-center max-lg:gap-16">
      <div className="lg:text-[1.5rem] md:text-[1.2rem] text-[1rem] max-sm:leading-[3rem] lg:leading-[5rem]">
        <p className=" text-white">
          Liked Our Event? Don't be shy to <br />
        </p>
        <div className="relative pb-[2rem]">
          <h1 className="sm:text-[6em] text-[5em] text-[#1f1f1f] font-bold font-saira special2 translate-x-2 translate-y-1">
            Contact Us
          </h1>
          <h1 className="sm:text-[6em] text-[5em] text-limee font-bold font-saira absolute top-0">
            Contact Us
          </h1>
        </div>

        <div className="flex flex-col justify-center gap-0 sm:gap-3 text-white md:pr-10 max-sm:pt-6 pt-10 leading-8 max-lg:pl-2 lg:text-2xl md:text-xl text-lg">
          <p>
            Mail:{" "}
            <span className="pl-16 text-limee">
              <a href="mailto:gdsc@mlrit.ac.in">gdsc@mlrit.ac.in</a>
            </span>
          </p>
          <p>
            Dinesh: <span className="pl-7">+91 70950 91735</span>
          </p>
          <p>
            Nikhil: <span className="pl-10">+91 87908 21615</span>
          </p>
        </div>
      </div>
      {/* <div className="leading-[5rem]">
        <p className="lg:text-[1.5rem] md:text-[1.2rem] text-[1rem] max-sm:leading-[3rem] lg:leading-[5rem] text-white">
          Want to stay updated on events?
        </p>
        <div className="relative pb-[2rem]">
          <h1 className="sm:text-[9rem] text-[5em] text-[#1f1f1f] font-bold font-saira special2 translate-x-2 translate-y-1">
            Follow Us
          </h1>
          <h1 className="sm:text-[9rem] text-[5em] text-limee font-bold font-saira absolute top-0">
            Follow Us
          </h1>
        </div>
        <div className="flex gap-10 pt-12 justify-center items-center">
          <a
            href="https://instagram.com/gdscmlrit?igshid=MWNybHd2cHMwcDlzbg=="
            className="text-white flex"
          >
            <img src="/small_icons/insta.svg" className="sm:h-6 h-4" alt="" />
            <p>Instagram</p>
          </a>
          <a href="https://discord.gg/h6VbvcGHS">
            <img src="/small_icons/discord.svg" className="sm:h-6 h-4" alt="" />
          </a>
          <a href="https://www.linkedin.com/company/gdscmlrit/">
            <img src="/linkedin.svg" alt="" className="sm:h-6 h-4" />
          </a>
        </div>
      </div> */}
      <div className="lg:text-[1.5rem] md:text-[1.2rem] text-[1rem] max-sm:leading-[3rem] lg:leading-[5rem]">
        <p className=" text-white">
          Want to stay updated on events? <br />
        </p>
        <div className="relative pb-[2rem]">
          <h1 className="sm:text-[6em] text-[5em] text-[#1f1f1f] font-bold font-saira special2 translate-x-2 translate-y-1">
            Follow Us
          </h1>
          <h1 className="sm:text-[6em] text-[5em] text-limee font-bold font-saira absolute top-0">
            Follow Us
          </h1>
        </div>

        <div className="flex flex-col justify-center gap-0 sm:gap-3 text-white md:pr-10 max-sm:pt-6 pt-10 leading-10 pl-2  lg:text-2xl md:text-xl text-lg">
          <a
            href="https://instagram.com/gdscmlrit?igshid=MWNybHd2cHMwcDlzbg=="
            className="flex gap-5 items-center hover:text-limee"
          >
            <img src="/small_icons/insta.svg" alt="" className="h-[25px]" />
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/company/gdscmlrit/"
            className="flex gap-5 items-center hover:text-limee"
          >
            <img src="/linkedin.svg" alt="" className="h-[25px]" />
            Linked In
          </a>
          <a
            href="https://discord.gg/h6VbvcGHS"
            className="flex items-center hover:text-limee"
          >
            <img src="/small_icons/discord.svg" alt="" className="h-[25px]" />{" "}
            Discord
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
