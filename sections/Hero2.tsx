import Tag from "@/components/Tag";
import Image from "next/image";

const Hero2 = () => {
  return (
    <section
      className={`min-h-[90vh] bg-[#151515] text-white bg-cover flex justify-start items-center sm:w-[75%] w-[85%] relative h-full`}
    >
      <div className="max-sm:min-h-[75vh] max-sm:flex max-sm:pt-[0rem] max-sm:flex-col max-sm:gap-[2rem] max-sm:justify-center md:justify-center md:items-center z-10 flex-1 relative">
        {/* mobile and tab version */}
        <img src="/gdsclogo2.png" alt="" className="w-[20rem] max-md:hidden" />
        <h1 className="lg:hidden text-[#dfdfdf] text-[6rem] leading-[5.6rem] sm:text-[9rem] sm:leading-[9rem] md:text-[11rem] md:leading-[10rem] font-dmserif mb-5 z-10 relative mt-[7rem]">
          Hello, <br />
          World<span className="text-[#99F94E] ">.</span>
          <br />
          <p className="text-medium font-poppins font-semibold sm:hidden">
            A <span className="text-limee">GDSC MLRIT</span> initiative
          </p>
          <div className="absolute bottom-0 left-0 translate-x-[40%] z-4 translate-y-[-20%] sm:hidden">
            <img src="/Hero_mobile.png" alt="globe" className="w-[16rem]" />
          </div>
          <div className="max-sm:hidden absolute bottom-0 left-0 z-4 translate-x-[70%] translate-y-[-50%]">
            <Image
              src="/HeroImage.png"
              alt="globe"
              width={500}
              height={500}
              className="scale-150"
            />
          </div>
        </h1>

        {/* desktop version like md */}
        {/* <div className="max-lg:hidden flex w-full p-10 justify-center relative">
          <h1 className="font-semibold text-[11rem] leading-[11rem] font-poppins mt-[10rem]">
            Hello, <br />
            <span>
              World<span className="text-[#99F94E] ">.</span>
            </span>
          </h1>

          <div className="text-white">Hello world</div>
          <div className="w-[10em] ">
            <img src="/HeroImage.png" alt="globe" className="" />
          </div>
        </div> */}

        <div className="max-lg:hidden relative w-full">
          <h1 className="md:text-[11em] sm:text-[9rem] sm:leading-[9rem] md:leading-[11rem] text-[7rem] leading-[7rem] font-dmserif pb-5 z-10">
            Hello, <br />
            <span>
              World<span className="text-[#99F94E] ">.</span>
            </span>
          </h1>

          <div className="absolute top-0 right-0 w-[500px] translate-x-10 translate-y-[-10%]">
            <img src="/HeroImage.png" alt="globe" />
          </div>
        </div>

        <p className="sm:hidden font-semibold text-2xl">
          Dive into the emerging <br />
          fields of <span className="text-[#99F94E]">tomorrow</span>.
        </p>

        <div className="flex gap-10 max-sm:flex-col max-sm:gap-5 sm:pl-3 max-sm:mb-[8rem]">
          <Tag icon="/roc.svg" name="STARTUPS" />
          <Tag icon="/design.svg" name="DESIGN" />
          <Tag icon="/tech.svg" name="TECHNOLOGY" />
        </div>

        <p className="text-[1.8rem] font-[500] max-sm:hidden sm:pl-3 lg:pt-6 w-full">
          Dive into the emerging fields of{" "}
          <span className={`text-[#99F94E]`}>tomorrow</span>.
        </p>
      </div>
    </section>
  );
};

export default Hero2;
