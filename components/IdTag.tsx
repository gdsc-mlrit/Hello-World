import React from "react";

const IdTag = ({ image, name, tag }: any) => {
  return (
    <div className="flex bg-[#2b2b2b] text-white rounded-lg w-[20rem] h-[8rem] p-2">
      <div className="my-auto h-24">
        <img src={image} alt={image} className="rounded-full h-24" />
      </div>
      <div className="flex flex-col items-start justify-center pl-3">
        <h1 className="text-limee font-semibold text-2xl">{name}</h1>
        <p className="text-[#dbdbdb] text-lg">{tag}</p>
      </div>
    </div>
  );
};

export default IdTag;
