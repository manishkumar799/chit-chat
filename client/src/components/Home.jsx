import React from "react";
import Card from "./Card";
import { BsChatRightFill } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { MdMail, MdGroups2 } from "react-icons/md";
import Suggestions from "./Suggestions";
import Notifications from "./Notifications";
import Inbox from "./Inbox";
import { CiCirclePlus } from "react-icons/ci";

function Home() {
  return (
    <div className="h-[100vh]">
      <div className="flex justify-between items-center h-[60px] bg-white px-10 shadow-xl">
        <div className="text-xl font-bold">CHAT ONN</div>
        <div className="text-slate-500">Create memorable talks</div>
      </div>
      <div className=" mt-1">
        <div className="flex flex-row  gap-1 h-[100%]">
          <div className="w-[20%] shadow-xl">
            <div className="flex justify-evenly items-center h-[63px] gap-2 bg-white px-4 shadow-xl">
              <div className=" w-[15%] ">
                <BsChatRightFill size={20} />
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
            <div className=" px-5">
              <div className="flex justify-between items-center h-[10%] py-5">
                <div className="text-3xl font-bold">Chats</div>
                <div>
                  <CiCirclePlus size={30} />
                </div>
              </div>
              <div className="flex gap-4 text-sm flext-start font-bold">
                <div>DIRECTS</div>
                <div>GROUPS</div>
                <div>PUBLIC</div>
              </div>
              <div className="py-4 relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-1 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search friends, groups..."
                  required
                />
                {/* <input className="w-full" type="text" placeholder="search" /> */}
              </div>

              <div
                className="flex flex-col gap-2 "
                style={{
                  maxHeight: "60vh",
                  overflowY: "auto",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {Array.from({ length: 30 }, (_, i) => (
                  <Card key={i} />
                ))}
              </div>
            </div>
          </div>
          <div className=" w-[60%] relative ">
            <Inbox />
          </div>
          <div className="w-[20%] shadow-xl">
            <div className="h-[55%] px-4">
              <h1 className="text-3xl font-bold py-3">Notificatios</h1>
              <div
                className="flex flex-col gap2"
                style={{
                  maxHeight: "40vh",
                  overflowY: "auto",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <Notifications key={i} />
                ))}
              </div>
            </div>
            <div className="h-[45%] px-4">
              <h1 className="text-3xl font-bold py-3">Suggestions</h1>
              <div
                className="flex flex-col gap2"
                style={{
                  maxHeight: "30vh",
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
