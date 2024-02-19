import React from "react";

function Notifications() {
  return (
    <>
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
          <div
            className="flex items-center shadow-d gap-2 bg-[#efeeee] p-2"
            key={i}
          >
            <div className="w-[20%] ">
              <img
                className="h-[50px] w-[50px] rounded-full border-x-2"
                src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                alt=""
              />
            </div>
            <div className="w-[80%]">
              <span className="font-bold text-blue-900">@Ankita</span> mentioned
              you in "Trip to Goa"{" "}
              <span className="text-[11px]">1 min ago</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Notifications;
