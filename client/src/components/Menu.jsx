import React from "react";
import { BsChatRightFill } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { MdMail, MdGroups2 } from "react-icons/md";

function Menu() {
  return (
    <div className="flex justify-evenly items-center h-[63px] gap-2 bg-white px-4 shadow-xl">
      <div className=" w-[15%] ">
        <BsChatRightFill color="#12ee12" size={20} />
      </div>
      <div className="w-[15%]">
        <IoCall size={25} />
      </div>
      <div className="w-[15%]">
        <MdMail size={25} />
      </div>
      <div className="w-[15%]">
        <MdGroups2 size={30} />
      </div>
      <div className="w-[15%]">
        <img
          className="h-[35px] w-[35px] rounded-full border-x-2"
          src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Menu;
