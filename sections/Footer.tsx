const Footer = () => {
  return (
    <div className="sm:w-[75%] flex justify-between py-24 max-sm:flex-col">
      <div>
        <p className="lg:text-[1.5rem] md:text-[1.2rem] text-[1rem] leading-[4em] text-white">
          Liked Our Event? Don't be shy to <br />
          <span className="sm:text-[6em] text-[5em] text-limee font-bold font-saira">
            Contact Us
          </span>
        </p>
      </div>
      <div className="flex sm:flex-col sm:gap-3 gap-5 sm:justify-center justify-between lg:text-2xl md:text-xl text-md text-white sm:pr-10 max-sm:pt-10">
        <p className="flex sm:gap-6 gap-2 hover:text-limee">
          <img src="/mail.svg" alt="" />
          Mail
        </p>
        <p className="flex sm:gap-6 gap-2 hover:text-limee">
          <img src="/twitter.svg" alt="" />
          Twitter
        </p>
        <p className="flex sm:gap-6 gap-2 hover:text-limee">
          <img src="/linkedin.svg" alt="" />
          Linked In
        </p>
      </div>
    </div>
  );
};

export default Footer;
