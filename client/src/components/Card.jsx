import React from "react";

function Card() {
  return (
    <div className="h-[60px] px-2 flex items-center gap-2 border-2">
      <div className="flex-start">
        <img
          className="h-[50px] w-[50px] rounded-full border-x-2"
          src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
          alt=""
        />
      </div>
      <div className="flex">
        <div>
          <div className="font-bold">Test User</div>
          <div className="text-sm">Lorem ipsum dolor sit!</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-[12px]">03:00PM</div>
          <div className="text-[20px]">3</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
