import React from "react";

function Suggestions() {
  const suggestions = [
    {
      name: "Abhiman Singh",
      mutuals: 12,
      profileImgUrl: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
    },
    {
      name: "Alice Johnson",
      mutuals: 5,
      profileImgUrl: "https://example.com/profiles/alice.jpg",
    },
    {
      name: "John Doe",
      mutuals: 8,
      profileImgUrl: "https://example.com/profiles/john.jpg",
    },
    {
      name: "Emily Smith",
      mutuals: 10,
      profileImgUrl: "https://example.com/profiles/emily.jpg",
    },
    {
      name: "Michael Brown",
      mutuals: 15,
      profileImgUrl: "https://example.com/profiles/michael.jpg",
    },
    {
      name: "Sophia Martinez",
      mutuals: 20,
      profileImgUrl: "https://example.com/profiles/sophia.jpg",
    },
    {
      name: "Daniel Johnson",
      mutuals: 18,
      profileImgUrl: "https://example.com/profiles/daniel.jpg",
    },
    {
      name: "Olivia Davis",
      mutuals: 25,
      profileImgUrl: "https://example.com/profiles/olivia.jpg",
    },
    {
      name: "Ethan Wilson",
      mutuals: 30,
      profileImgUrl: "https://example.com/profiles/ethan.jpg",
    },
    {
      name: "Ava Taylor",
      mutuals: 22,
      profileImgUrl: "https://example.com/profiles/ava.jpg",
    },
  ];

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
        {suggestions.map((item, i) => (
          <div className="flex items-center shadowmd bg-[#efeeee] p-2" key={i}>
            <div className="w-[20%] ">
              <img
                className="h-[50px] w-[50px] rounded-full border-x-2"
                src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                alt=""
              />
            </div>
            <div className="w-[60%]">
              <div className="font-bold">{item.name}</div>
              <div className="text-sm">{item.mutuals} mutuals</div>
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
