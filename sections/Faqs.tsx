"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Faqs = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 px-6 py-6 md:w-[75%] w-full">
      <h1 className="lg:text-[4rem] md:text-[3rem] text-[2rem] pb-10 font-bold text-limee">
        Questions? Look here
      </h1>
      <Accordion className="text-white bg-[#1f1f1f] rounded-lg p-5">
        <AccordionItem
          title={
            <p className="text-semibold text-white lg:text-3xl md:text-2xl text-xl">
              Question 1
            </p>
          }
        >
          <p className="sm:text-lg text-md">This will be the answer</p>
        </AccordionItem>
        <AccordionItem
          title={
            <p className="text-semibold text-white lg:text-3xl md:text-2xl text-xl">
              Question 2
            </p>
          }
        >
          <p className="sm:text-lg text-md">This will be the answer</p>
        </AccordionItem>
        <AccordionItem
          title={
            <p className="text-semibold text-white lg:text-3xl md:text-2xl text-xl">
              Question 3
            </p>
          }
        >
          <p className="sm:text-lg text-md">This will be the answer</p>
        </AccordionItem>
        <AccordionItem
          title={
            <p className="text-semibold text-white lg:text-3xl md:text-2xl text-xl">
              Question 4
            </p>
          }
        >
          <p className="sm:text-lg text-md">This will be the answer</p>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faqs;
