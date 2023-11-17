import React from "react";

const IdTag = ({ image, name, tag }: any) => {
  return (
    <div className="relative">
      <div className="flex bg-[#262626] text-white rounded-md w-[20rem] h-[7rem] p-2 shadow-lg shadow-black absolute top-0 z-10">
        <div className="my-auto h-20">
          <img src={image} alt={image} className="rounded-full h-20" />
        </div>
        <div className="flex flex-col items-start justify-center pl-3">
          <h1 className="text-limee font-semibold text-2xl">{name}</h1>
          <p className="text-[#dbdbdb] text-lg">{tag}</p>
        </div>
      </div>
      <div className="w-[20rem] h-[7rem] bg-limee rounded-md translate-x-[0.4rem] translate-y-[0.6rem]"></div>
    </div>
  );
};

export default IdTag;
