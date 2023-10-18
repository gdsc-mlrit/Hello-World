import Tag from "@/components/Tag";

const Hero = ({ dark }: any) => {
  return (
    <section
      className={`min-h-[90vh] ${
        dark ? "bg-[#151515] text-white" : "bg-white"
      } bg-cover flex justify-start items-center w-full relative`}
    >
      <div className="max-sm:min-h-[75vh] max-sm:flex max-sm:flex-col max-sm:gap-[2rem] max-sm:justify-center md:max-w-[60%] pl-4 md:pl-[9rem]">
        <p className="sm:text-[12rem] font-semibold sm:leading-[12rem] text-[6rem] leading-[6rem] font-poppins pb-5">
          Hello, <br />
          <span>World<span className="text-[#99F94E] ">.</span></span>
        </p>

        <p className="sm:hidden font-semibold pt-5 text-[23px]">
          Dive into the emerging <br />
          fields of <span className="text-[#99F94E]">tomorrow</span>.
        </p>

        <div className="flex gap-[4rem] pt-6 max-sm:flex-col max-sm:gap-1 sm:pl-3">
          <Tag icon="/roc.svg" name="STARTUPS" />
          <Tag icon="/design.svg" name="DESIGN" />
          <Tag icon="/tech.svg" name="TECHNOLOGY" />
        </div>

        <p className="text-[1.8rem] pt-6 font-[500] max-sm:hidden sm:pl-3">
          Dive into the emerging fields of {" "}
          <span className={`text-[#99F94E]`}>
            tomorrow
          </span>
          .
        </p>
      </div>

      <div className="max-w-[40%] absolute right-[4rem] top-5 max-sm:hidden">
        <img src="/HeroImage.png" alt="globe" />
      </div>
      
    </section>
  );
};

export default Hero;
