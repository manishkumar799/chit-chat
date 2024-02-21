import React from "react";

function Notifications() {
  const notifications = [
    {
      name: "Ankita",
      message: "mentioned you in 'Trip to Goa'",
      time: "1 min ago",
      profileImgUrl: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
    },
    {
      name: "John",
      message: "commented on your post 'Summer Vacation Plans'",
      time: "5 mins ago",
      profileImgUrl: "https://example.com/profiles/john.jpg",
    },
    {
      name: "Emily",
      message: "liked your photo",
      time: "10 mins ago",
      profileImgUrl: "https://example.com/profiles/emily.jpg",
    },
    {
      name: "David",
      message: "shared your story",
      time: "15 mins ago",
      profileImgUrl: "https://example.com/profiles/david.jpg",
    },
    {
      name: "Sophia",
      message: "sent you a friend request",
      time: "20 mins ago",
      profileImgUrl: "https://example.com/profiles/sophia.jpg",
    },
    {
      name: "Michael",
      message: "tagged you in a photo",
      time: "30 mins ago",
      profileImgUrl: "https://example.com/profiles/michael.jpg",
    },
    {
      name: "Olivia",
      message: "invited you to an event",
      time: "1 hour ago",
      profileImgUrl: "https://example.com/profiles/olivia.jpg",
    },
    {
      name: "Daniel",
      message: "mentioned you in a comment",
      time: "2 hours ago",
      profileImgUrl: "https://example.com/profiles/daniel.jpg",
    },
    {
      name: "Sarah",
      message: "replied to your message",
      time: "3 hours ago",
      profileImgUrl: "https://example.com/profiles/sarah.jpg",
    },
    {
      name: "James",
      message: "sent you a direct message",
      time: "4 hours ago",
      profileImgUrl: "https://example.com/profiles/james.jpg",
    },
  ];

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
        {notifications.map((item, i) => (
          <div
            className="flex items-center shadow-d gap-2 bg-[#efeeee] p-2"
            key={i}
          >
            <div className="w-[20%] ">
              <img
                className="h-[50px] w-[50px] rounded-full border-x-2"
                src={"https://cdn-icons-png.flaticon.com/512/21/21104.png"}
                alt=""
              />
            </div>
            <div className="w-[80%]">
              <span className="font-bold text-blue-900">@{item.name}</span> {item.message}
              <span className="text-[11px]">{" " + item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Notifications;
