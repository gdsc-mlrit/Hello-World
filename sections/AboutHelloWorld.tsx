import { Logo911 } from "@/components/logo";

export const AboutHelloWorld = ({ dark }: any) => {
  return (
    <main className="max-lg:flex max-lg:justify-center max-lg:items-center lg:translate-x-[-1rem]">
      <div className="max-lg:hidden border border-[#99F94E] border-l-0 w-[80vw] relative bg-[#1F1F1F] rounded-br-[45rem] rounded-tr-[5rem] rounded-l-[100rem] mb-24 flex justify-end pt-10 m-auto">
        <div className="text-white pt-5 w-[31em] font-poppins pr-10">
          <h1 className="text-[4.5vw] font-[500] leading-[5vw]">
            <span className="text-[#636363] font-normal">What is</span> <br />
            Hello World<span className="text-[#99f94e]">?</span>
          </h1>
          <p className="text-xl py-10 pb-14 text-justify">
            Hello World. is an introductory{" "}
            <span className="text-limee">course + competition</span> on various
            aspects of the future for engineers, delving into important domains
            including technology, design and entrepreneurship. It is an
            initiative by Google Developer Student Clubs, MLRIT Chapter to
            provide an opportunity for freshers to gain important exposure in
            the mentioned domains.
          </p>
        </div>

        <img
          src="/HeroImage.png"
          alt=""
          className="absolute -rotate-[135deg] top-0 left-0 h-full z-10 max-xl:hidden"
        />
        <svg
          width="40"
          height="40"
          viewBox="0 0 58 72"
          fill=""
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 translate-x-[2rem] max-lg:hidden"
        >
          <path
            id="Union"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 1C0 0.447716 0.447715 0 1 0H12.5754C13.1277 0 13.5754 0.447715 13.5754 1V41.4637C13.5754 42.3497 14.6425 42.798 15.2753 42.1779L26.2257 31.448V28.1794L16.8939 31.4572V29.3704L26.2257 22.004V17.2156C26.2257 16.5969 26.4715 16.0035 26.909 15.566C27.3465 15.1285 27.9399 14.8827 28.5587 14.8827C29.1774 14.8827 29.7708 15.1285 30.2083 15.566C30.6458 16.0035 30.8916 16.5969 30.8916 17.2156V21.8816L40.2235 29.2479V31.4584L30.8916 28.0814V31.4029L42.1508 42.2177C42.7864 42.8281 43.8436 42.3777 43.8436 41.4965V0.999998C43.8436 0.447713 44.2913 0 44.8436 0H56.419C56.9713 0 57.419 0.447715 57.419 1V71C57.419 71.5523 56.9713 72 56.419 72H44.8436C44.2913 72 43.8436 71.5523 43.8436 71V61.5329C43.8436 61.2802 43.7479 61.0368 43.5758 60.8518L28.5428 44.6914C28.1272 44.2446 27.4118 44.271 27.0302 44.7472L13.795 61.2678C13.6529 61.4452 13.5754 61.6658 13.5754 61.8931V71C13.5754 71.5523 13.1277 72 12.5754 72H1C0.447716 72 0 71.5523 0 71V1Z"
            fill="#99f94e"
          />
        </svg>
      </div>
      <div className="lg:hidden border border-[#99f94e] rounded-t-[12vw] rounded-b-[5vw] h-[90%] w-[90%] bg-[#1f1f1f] flex justify-center items-center flex-col max-lg:py-10">
        <h2 className="lg:hidden text-[#99f94e] w-[85%] text-[2rem] leading-[2.5rem] md:text-[3rem] font-semibold font-poppins py-2 pb-5">
          What is <br />
          <span className="text-[2.5rem] font-semibold text-white">
            Hello World?
          </span>
        </h2>
        <p className="text-white sm:text-2xl max-sm:text-left w-[85%] text-justify ">
          Hello World. Is an introductory course to various aspects of the
          future for engineers, delving into important domains including
          technology, design and entrepreneurship. It is an initiative by Google
          Developer Student Clubs, MLRIT Chapter to provide an opportunity for
          freshers to gain important exposure in the mentioned domains.{" "}
        </p>
      </div>
    </main>
  );
};
