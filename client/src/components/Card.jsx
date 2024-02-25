import React, { useEffect } from "react";

function Card({ setInbox, conversation }) {

  return (
    <>
      <div
        className="flex flex-col gap-2 "
        style={{
          maxHeight: "59vh",
          overflowY: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {conversation.map((items, index) => (
          <div
            onClick={() => setInbox(items)}
            className="h-[60px] px-2 flex flex-row items-center relative gap-2 shadow-md bg-[#efeeee] p-2 custom-shadow border-2 border-slate-300 hover:cursor-pointer"
            key={index}
          >
            <div className="">
              <img
                className="h-[50px] w-[50px] rounded-full border-x-2"
                src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                alt=""
              />
            </div>
            <div className="flex justify-between ">
              <div className="">
                <div className="font-bold">{items.name}</div>
                <div className="text-[10px] w-[80%] overflow-hidden whitespace-nowrap overflow-ellipsis">
                  {items.msg.length > 30
                    ? items.msg.slice(0, 30) + "..."
                    : items.msg}
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 absolute right-1">
                <div className="text-[12px] ">{items.time}</div>
                <div className="text-[15px] rounded-full w-5 h-5 flex justify-center items-center border-2 border-black">
                  {items.unread}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
