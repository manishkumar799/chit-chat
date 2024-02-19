import React from "react";

function Suggestions() {
  return (
    <>
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
          <div className="flex items-center shadowmd bg-[#efeeee] p-2" key={i}>
            <div className="w-[20%] ">
              <img
                className="h-[50px] w-[50px] rounded-full border-x-2"
                src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                alt=""
              />
            </div>
            <div className="w-[60%]">
              <div className="font-bold">Abhiman Singh</div>
              <div className="text-sm">12 mutuals</div>
            </div>
            <div className="w-[20%]">
              <button className="border-2 w-[60px] rounded-full bg-blue-700 text-white">
                {" "}
                Add{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Suggestions;
