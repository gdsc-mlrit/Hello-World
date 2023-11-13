const Tag = ({ icon, name }: any) => {
  return (
    <div className="flex items-center">
      <img
        src={icon}
        alt=""
        className="sm:h-[33px] sm:w-[33px] h-[30px] w-[30px]"
      />
      <p className="text-[1.4em] max-sm:font-[500] max-sm:text-2xl pl-3 max-md:pl-5">
        {name}
      </p>
    </div>
  );
};

export default Tag;
