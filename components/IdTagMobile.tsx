import React from "react";

const IdTagMobile = ({ image, tag, name }: any) => {
  return (
    <div className="w-[10rem] h-[12rem] bg-[#2b2b2b] flex flex-col justify-center items-center rounded-lg pb-3">
      <img src={image} alt="" className="h-24" />
      <h1 className="text-limee font-semibold text-xl pt-3">{name}</h1>
      <p className="text-[#dbdbdb]">{tag}</p>
    </div>
  );
};

export default IdTagMobile;
