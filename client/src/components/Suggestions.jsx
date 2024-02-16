import React from "react";

function Suggestions() {
  return (
    <div className="flex items-center">
      <div className="w-[20%] ">
        <img className="h-[50px] w-[50px] rounded-full border-x-2" src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="" />
      </div>
      <div className="w-[60%]">
        <div className="font-bold">Abhiman Singh</div>
        <div className="text-sm">12 mutuals</div>
      </div>
      <div className="w-[20%]">
        <button></button>
      </div>
    </div>
  );
}

export default Suggestions;
