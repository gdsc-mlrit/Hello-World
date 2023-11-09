import React from "react";

const Socials = () => {
  return (
    <div className="flex justify-between text-white sm:w-[75%] w-[60%] pb-10 lg:pr-10">
      <p className="lg:text-xl md:text-lg text-md">@GDSC MLRIT</p>
      <div className="flex items-center sm:gap-7 gap-3 lg:text-xl md:text-lg text-md">
        <p className="pr-2 max-sm:hidden">Follow Us</p>
        <a
          href="https://instagram.com/gdscmlrit?igshid=MWNybHd2cHMwcDlzbg=="
          className="text-3xl"
        >
          <img src="/small_icons/insta.svg" className="sm:h-6 h-4" alt="" />
        </a>
        <a href="https://discord.gg/h6VbvcGHS">
          <img src="/small_icons/discord.svg" className="sm:h-6 h-4" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Socials;
