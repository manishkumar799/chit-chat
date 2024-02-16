import React from "react";
import Card from "./Card";
import { BsChatRightFill } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { MdMail, MdGroups2 } from "react-icons/md";
import Suggestions from "./Suggestions";

function Home() {
  return (
    <div>
      <div className="flex justify-between items-center h-[60px] bg-white px-10">
        <div className="text-xl font-bold">CHAT ONN</div>
        <div className="text-slate-500">Create memorable talks</div>
      </div>
      <div className="h-[90vh] mt-1">
        <div className="flex flex-row h-[100%] gap-1">
          <div className="h-[100%] w-[20%]">
            <div className="flex justify-evenly items-center h-[10%] gap-2 bg-white">
              <div className=" w-[15%]">
                <BsChatRightFill size={20} />
              </div>
              <div className="w-[15%]">
                <IoCall size={20} />
              </div>
              <div className="w-[15%]">
                <MdMail size={20} />
              </div>
              <div className="w-[15%]">
                <MdGroups2 size={20} />
              </div>
              <div className="w-[15%]">
                <img
                  className="h-[40px] w-[40px] rounded-full border-x-2"
                  src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                  alt=""
                />
              </div>
            </div>
            <div className="h-[90%] bg-red-400 px-5">
              <div className="flex justify-between items-center h-[10%]">
                <div className="text-2xl">Chats</div>
                <div>Plus</div>
              </div>
              <div className="flex justify-between">
                <div>DIRECTS</div>
                <div>GROUPS</div>
                <div>PUBLIC</div>
              </div>
              <div className="py-4">
                <input className="w-full" type="text" placeholder="search" />
              </div>

              <div
                className="flex flex-col gap-2"
                style={{
                  maxHeight: "420px",
                  overflowY: "auto",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <Card key={i} />
                ))}
              </div>
            </div>
          </div>
          <div className="bg-slate-500 h-[100%] w-[60%]">2</div>
          <div className="bg-slate-500 h-[100%] w-[20%]">
            <div className="h-[55%] ">
              <h1 className="text-3xl font-bold">Notificatios</h1>
            </div>
            <div className="h-[45%]">
              <h1 className="text-3xl font-bold">Suggestions</h1>
              <div
                className="flex flex-col gap-2"
                style={{
                  maxHeight: "200px",
                  overflowY: "auto",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <Suggestions key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
