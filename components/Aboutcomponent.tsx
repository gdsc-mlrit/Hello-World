const Aboutcomponent = ({ logo, questions, section }: any) => {
  return (
    <div className="w-[80%] relative">
      <div className="pb-10">
        <div className="text-5xl text-white font-semibold">
          Explore <br />
          <div className="text-[1.5em] text-limee font-bold relative">
            <h1 className="special2 text-[#1f1f1f] translate-x-1 translate-y-1">
              {section}
            </h1>
            <h1 className="absolute top-0">{section}</h1>
          </div>
        </div>
      </div>
      <div>
        {questions.map((q: any) => (
          <p className="text-white text-xl pt-2 pl-2">{q}</p>
        ))}
      </div>
      <img
        src={`/${logo}.svg`}
        alt=""
        className="absolute top-0 right-0 translate-x-10 h-[140px]"
      />
    </div>
  );
};

export default Aboutcomponent;
