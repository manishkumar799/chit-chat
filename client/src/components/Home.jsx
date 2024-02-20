import React, { useState } from "react";
import Card from "./Card";
import Menu from "./Menu";
import Suggestions from "./Suggestions";
import Notifications from "./Notifications";
import Inbox from "./Inbox";
import { CiCirclePlus } from "react-icons/ci";

function Home() {
  const [inbox, setInbox] = useState({});
  return (
    <div className="h-[100vh]">
      <div className="flex justify-between items-center h-[60px] bg-white px-10 shadow-xl">
        <div className="text-xl font-bold">Chatterbox</div>
        <div className="text-slate-500">Create memorable talks</div>
      </div>
      <div className=" mt-1">
        <div className="flex flex-row  gap-1 h-[100%]">
          <div className="w-[20%] shadow-xl">
            <Menu />
            <div className="px-5">
              <div className="flex justify-between items-center h-[10%] py-5">
                <div className="text-3xl font-bold">Chats</div>
                <div className="hover:cursor-pointer">
                  <CiCirclePlus size={30} />
                </div>
              </div>
              <div className="flex gap-4 text-sm flext-start font-bold">
                <div className="hover:cursor-pointer">DIRECTS</div>
                <div className="hover:cursor-pointer">GROUPS</div>
                <div className="hover:cursor-pointer">PUBLIC</div>
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
                  type=""
                  id="default-search"
                  class="block w-full h-8 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50"
                  placeholder="Search friends, groups..."
                  required
                />
                {/* <input className="w-full" type="text" placeholder="search" /> */}
              </div>

              <Card setInbox={setInbox} />
            </div>
          </div>
          <div className=" w-[60%] relative ">
            <Inbox inboxData={inbox} />
          </div>
          <div className="w-[20%] shadow-xl">
            <div className="h-[55%] px-4">
              <Notifications />
            </div>
            <div className="h-[45%] px-4">
              <Suggestions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
