import React from "react";
import { MdVideoCall, MdCall } from "react-icons/md";
import { SlOptions } from "react-icons/sl";
import { BsEmojiSmile, BsSendFill } from "react-icons/bs";

function Inbox() {
  return (
    <div className="flex flex-col shadow-xl">
      <div className="px-4 flex items-center h-[63px] bg-white">
        <div className="w-[10%] ">
          <img
            className="h-[50px] w-[50px] rounded-full border-x-2"
            src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
            alt=""
          />
        </div>
        <div className="w-[70%]">
          <div className="font-bold text-lg">Test User</div>
          <div className="text-sm">Last seen 30 minutes ago.</div>
        </div>
        <div className="flex gap-7">
          <div>
            <MdCall size={30} />
          </div>
          <div>
            <MdVideoCall size={30} />
          </div>
          <div>
            <SlOptions size={30} />
          </div>
        </div>
      </div>
      <div className=""></div>
      <div className="h-[63px] w-full flex justify-center items-center absolute bottom-4">
        <div class="absolute inset-y-0 end-28 flex items-center ps-3 pointer-events-none">
          <BsEmojiSmile />
        </div>
        <input
          type="search"
          id="default-search"
          class="block w-[80%] p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Type a message here..."
          required
        />
      </div>
      <div className="absolute inset-y-0 end-16 flex items-center ps-3 pointer-events-none shadow-xl">
        <BsSendFill />
      </div>
    </div>
  );
}

export default Inbox;
