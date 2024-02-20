import React from "react";
import { MdVideoCall, MdCall } from "react-icons/md";
import { SlOptions } from "react-icons/sl";
import { BsEmojiSmile, BsSendFill } from "react-icons/bs";
import { TiAttachmentOutline } from "react-icons/ti";

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
        <div class="absolute inset-y-0 start-14 flex items-center">
          <BsEmojiSmile size={20} />
        </div>
        <div class="absolute inset-y-0  flex items-center ps-3 start-2 top-[10px] w-[60px] h-[40px] ">
        <TiAttachmentOutline size={30} />
        </div>
        <textarea
          type="text"
          id="default-search"
          class="block w-[80%] p-2 ps-10 pe-10 text-sm text-gray-900 border border-gray-500 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 h-10 max-h-10 min-h-10"
          placeholder="Type a message here..."
          required
        />
        <div className="absolute end-6 w-[60px] h-[40px] flex items-center justify-center shadow-xl rounded-xl bg-blue-700">
          <BsSendFill color="white" size={25}/>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
