import React from "react";

function Home() {
  return (
    <div>
      <div className="flex justify-between items-center h-[60px] bg-white px-10">
        <div className="text-xl font-bold">CHAT ONN</div>
        <div className="text-slate-500">Create memorable talks</div>
      </div>
      <div className="h-[90vh] mt-1">
        <div className="flex flex-row h-[100%] gap-1">
          <div className="bg-slate-500 h-[100%] w-[20%]">
            
          </div>
          <div className="bg-slate-500 h-[100%] w-[60%]">2</div>
          <div className="bg-slate-500 h-[100%] w-[20%]">3</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
