"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Faqs = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 md:px-6 pt-6 md:w-[75%] w-full">
      <h1 className="lg:text-[4rem] md:text-[3rem] text-[2rem] pb-10 font-bold text-limee">
        Questions? Look here
      </h1>
      <Accordion
        variant="splitted"
        showDivider={true}
        className="text-white rounded-lg p-5"
      >
        <AccordionItem
          style={{ backgroundColor: "#1f1f1f" }}
          className="p-2 "
          title={
            <p className="text-semibold text-white lg:text-2xl md:text-xl text-lg">
              When is Hello World?
            </p>
          }
        >
          <p className="sm:text-lg text-md">
            It begins from 2nd December to February on a weekly basis.
          </p>
        </AccordionItem>
        <AccordionItem
          style={{ backgroundColor: "#1f1f1f" }}
          className="bg-[#1f1f1f] p-2 personal-class"
          title={
            <p className="text-semibold text-white lg:text-2xl md:text-xl text-lg">
              Any requirements to participate in 'Hello World'?
            </p>
          }
        >
          <p className="sm:text-lg text-md">
            No, all you need is to be a MLRIT student and a community member of
            GDSC. In return, we promise you the best opportunities and
            experiences.
          </p>
        </AccordionItem>
        <AccordionItem
          style={{ backgroundColor: "#1f1f1f" }}
          className="bg-[#1f1f1f] p-2 personal-class"
          title={
            <p className="text-semibold text-white lg:text-2xl md:text-xl text-lg">
              Can students collaborate with tech professionals?
            </p>
          }
        >
          <p className="sm:text-lg text-md">
            Indeed! We bring you the finest of speakers and the best of mentors,
            who have come along just as you have and hence it would be easier
            for you to find the click.{" "}
          </p>
        </AccordionItem>
        <AccordionItem
          style={{ backgroundColor: "#1f1f1f" }}
          className="bg-[#1f1f1f] p-2 personal-class"
          title={
            <p className="text-semibold text-white lg:text-2xl md:text-xl text-lg">
              How to stay updated on 'Hello World'?
            </p>
          }
        >
          <p className="sm:text-lg text-md">
            {" "}
            You don't need to worry about that if you are in the community
            channels and follow our socials. As it is said, it is hard to miss
            out on any news about the most anticipated event{" "}
          </p>
        </AccordionItem>
        <AccordionItem
          style={{ backgroundColor: "#1f1f1f" }}
          className="bg-[#1f1f1f] p-2 personal-class"
          title={
            <p className="text-semibold text-white lg:text-2xl md:text-xl text-lg">
              What do you attain from participating?
            </p>
          }
        >
          <p className="sm:text-lg text-md personal-class">
            {" "}
            Involving with a large zealous crowd(2000 approx) from various
            backgrounds along with a multi-cohort.
            <br /> Greet. Meet. Share. <br />
            Network with coding professionals and entrepreneurship experts.
            <br />
            Engage in sessions that may lead to amazing projects time ahead.
          </p>
        </AccordionItem>
        <AccordionItem
          style={{ backgroundColor: "#1f1f1f" }}
          className="bg-[#1f1f1f] p-2 personal-class"
          title={
            <p className="text-semibold text-white lg:text-2xl md:text-xl text-lg">
              Finally, is it worth the hype?
            </p>
          }
        >
          <p className="sm:text-lg text-md">
            {" "}
            Well, with the involvement of the largest student community of India
            i.e Student Tribe, and the largest community of tomorrow's builders
            i.e Bluelearn, it has indeed become the spotlight of expectations
            and enthusiasm. You surely don't want to have the fear of missing
            out,Dont you?
          </p>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faqs;
