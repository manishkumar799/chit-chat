import React from "react";
import { MdVideoCall,MdCall  } from "react-icons/md";
import { SlOptions } from "react-icons/sl";

function Inbox() {
  return (
    <div className="flex flex-col">
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
            <div><MdCall size={30}/></div>
            <div><MdVideoCall size={30}/></div>
            <div><SlOptions size={30}/></div>
        </div>
      </div>
      <div className="">
        
      </div>
      <div className="h-[63px] w-full flex justify-center items-center absolute bottom-0">
        <input className="w-[90%] border-2" placeholder="Enter your message ..." type="text" />
      </div>
    </div>
  );
}

export default Inbox;
