import React from "react";

function Notifications() {
  return (
    <div className="flex items-center border-2 gap-2">
      <div className="w-[20%] ">
        <img
          className="h-[50px] w-[50px] rounded-full border-x-2"
          src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
          alt=""
        />
      </div>
      <div className="w-[80%]">
        <span className="font-bold text-blue-900">@Ankita</span> mentioned you
        in "Trip to Goa" <span className="text-[11px]">1 min ago</span>
      </div>
    </div>
  );
}

export default Notifications;
