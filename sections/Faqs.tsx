"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Faqs = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 px-6 py-6 md:w-[75%] w-full">
      <h1 className="lg:text-[4rem] md:text-[3rem] text-[2rem] pb-10 font-bold text-limee">
        Questions? Look here
      </h1>
      <Accordion
        showDivider={true}
        className="text-white bg-[#1f1f1f] rounded-lg p-5"
      >
        <AccordionItem
          className="bg-[#1f1f1f]"
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
          title={
            <p className="text-semibold text-white lg:text-2xl md:text-xl text-lg">
              Are there any specific requirements or qualifications to
              participate in 'Hello World'
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
          title={
            <p className="text-semibold text-white lg:text-2xl md:text-xl text-lg">
              Are there any opportunities for students to collaborate with tech
              professionals & mentors?
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
          title={
            <p className="text-semibold text-white lg:text-2xl md:text-xl text-lg">
              How can students stay updated with the latest news and
              announcements about 'Hello World'?
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
          title={
            <p className="text-semibold text-white lg:text-2xl md:text-xl text-lg">
              What do you attain from participating?
            </p>
          }
        >
          <p className="sm:text-lg text-md">
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
