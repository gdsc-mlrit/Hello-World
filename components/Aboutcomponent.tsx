const Aboutcomponent = ({ logo, questions, section }: any) => {
  return (
    <div className="w-[80%] relative">
      <div className="pb-10">
        <h1 className="text-5xl text-white font-semibold">
          Explore <br />
          <span className="text-[1.5em] text-limee font-bold">{section}</span>
        </h1>
      </div>
      <div>
        {questions.map((q: any) => (
          <p className="text-white text-xl pt-2 pl-2">{q}</p>
        ))}
      </div>
      <img
        src={`/${logo}.svg`}
        alt=""
        className="absolute top-0 bottom-0 my-auto right-0 h-[150px]"
      />
    </div>
  );
};

export default Aboutcomponent;
