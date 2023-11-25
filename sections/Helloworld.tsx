"use client";

import { Logo911 } from "@/components/logo";
import { Button, Link } from "@nextui-org/react";

const Helloworld = () => {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center lg:gap-10 md:gap-7 gap-5 lg:pt-[18rem] lg:pb-[14rem] md:pt-[14rem] md:pb-[9rem] pt-[10rem] pb-[6rem] relative">
        <img
          src="/mainlogo.png"
          alt=""
          className="lg:w-[55px] md:w-[35px] w-[20px]"
        />
        <h1 className="text-[#6d6d6d] lg:text-[5rem] md:text-[3.5rem] text-[2rem] font-semibold">
          This is <span className="text-white">Hello World</span>
          <span className="text-limee">.</span>
        </h1>
        <img
          src="/footerlogo.png"
          alt=""
          className="absolute lg:w-[650px] md:w-[450px] w-[250px] translate-x-[45%] translate-y-[-5%]"
        />
      </div>
      <div className="flex text-white lg:gap-[10rem] md:gap-[4rem] gap-5">
        <Button
          as={Link}
          href="/sponsorus"
          variant="flat"
          radius="full"
          className={`lg:text-3xl md:text-2xl text-lg font-[500] border p-4 md:p-6 lg:p-8 lg:px-16 md:px-10 px-6 bg-limee text-black`}
        >
          SPONSOR US
        </Button>
        <Button
          as={Link}
          href="#CONTACT US"
          variant="flat"
          radius="full"
          className={`lg:text-3xl md:text-2xl text-lg font-[500] border p-4 md:p-6 lg:p-8 lg:px-16 md:px-10 px-6 bg-limee text-black`}
        >
          CONTACT US
        </Button>
      </div>
    </main>
  );
};

export default Helloworld;
