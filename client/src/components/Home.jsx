import React from "react";
import Card from "./Card";

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
              <div className="bg-slate-900 w-[15%]">1</div>
              <div className="bg-slate-900 w-[15%]">2</div>
              <div className="bg-slate-900 w-[15%]">3</div>
              <div className="bg-slate-900 w-[15%]">4</div>
              <div className="bg-slate-900 w-[15%]">5</div>
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
                <input className="w-full" type="text" placeholder="search"/>
              </div>

              <div>
                <Card/>
              </div>
            </div>
          </div>
          <div className="bg-slate-500 h-[100%] w-[60%]">2</div>
          <div className="bg-slate-500 h-[100%] w-[20%]">3</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
