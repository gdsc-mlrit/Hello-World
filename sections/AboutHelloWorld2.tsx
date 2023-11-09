import { Logo911 } from "@/components/logo";

export const AboutHelloWorld2 = ({ dark }: any) => {
  return (
    <main className="w-full">
      <div className="m-auto bg-[#1f1f1f] lg:w-[75%] border-y border-r border-limee rounded-tr-[2.2rem] rounded-br-[16rem] flex justify-end">
        <div className="flex flex-col items-start w-[45%]">
          <h1 className="font-semibold text-[5rem] text-white leading-[6rem] p-3">
            <span className="font-medium text-[#636363]">What is</span>
            <br /> Hello World<span className="text-limee">?</span>
          </h1>
          <p className="text-medium text-white w-[90%] p-3">
            Hello World. Is an introductory course to various aspects of the
            future for engineers, delving into important domains including
            technology, design and entrepreneurship. It is an initiative by
            Google Developer Student Clubs, MLRIT Chapter to provide an
            opportunity for freshers to gain important exposure in the mentioned
            domains.
          </p>
        </div>
      </div>
    </main>
  );
};
