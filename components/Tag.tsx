const Tag = ({ icon, name }: any) => {
  return (
    <div className="flex items-center">
      <img
        src={icon}
        alt=""
        className="sm:h-[33px] sm:w-[33px] h-[30px] w-[30px]"
      />
      <p className="sm:text-[1.6em] text-[1.4em] pl-3">{name}</p>
    </div>
  );
};

export default Tag;
