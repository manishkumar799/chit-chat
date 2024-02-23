import React, { useEffect } from "react";

function Card({ setInbox }) {
  const inbox = [
    {
      name: "John Doe",
      msg: "Hey, how's it going?",
      time: "10:30 AM",
      unread: "3",
      profileImgUrl: "https://example.com/profiles/johndoe.jpg",
      sms: [
        {
          id: 1,
          msg: "Hey, how's it going",
          time: "10:30 AM",
        },
        {
          id: 2,
          msg: "Hey, I'm fine John.",
          time: "10:31 AM",
        },
      ],
    },
    {
      name: "Alice Smith",
      msg: "Did you finish the project?",
      time: "Yesterday",
      unread: "1",
      profileImgUrl: "https://example.com/profiles/alicesmith.jpg",
      sms: [
        {
          id: 1,
          msg: "Hey, how's it going",
          time: "10:30 AM",
        },
        {
          id: 2,
          msg: "Hey, I'm fine Alice.",
          time: "10:31 AM",
        },
      ],
    },
    {
      name: "David Johnson",
      msg: "Let's catch up this weekend!",
      time: "Wednesday",
      unread: "0",
      profileImgUrl: "https://example.com/profiles/davidjohnson.jpg",
      sms: [
        {
          id: 1,
          msg: "Hey, how's it going",
          time: "10:30 AM",
        },
        {
          id: 2,
          msg: "Hey, I'm fine David.",
          time: "10:31 AM",
        },
      ],
    },
    {
      name: "Emily Brown",
      msg: "Can you send me the details?",
      time: "Monday",
      unread: "2",
      profileImgUrl: "https://example.com/profiles/emilybrown.jpg",
      sms: [
        {
          id: 1,
          msg: "Hey, how's it going",
          time: "10:30 AM",
        },
        {
          id: 2,
          msg: "Hey, I'm fine. Emiliy",
          time: "10:31 AM",
        },
      ],
    },
    {
      name: "Michael Wilson",
      msg: "Thanks for your help!",
      time: "Feb 15",
      unread: "0",
      profileImgUrl: "https://example.com/profiles/michaelwilson.jpg",
      sms: [
        {
          id: 1,
          msg: "Hey, how's it going",
          time: "10:30 AM",
        },
        {
          id: 2,
          msg: "Hey, I'm fine.Michael",
          time: "10:31 AM",
        },
      ],
    },
    {
      name: "Sarah Taylor",
      msg: "Let's grab lunch tomorrow.",
      time: "Feb 10",
      unread: "0",
      profileImgUrl: "https://example.com/profiles/sarahtaylor.jpg",
      sms: [
        {
          id: 1,
          msg: "Hey, how's it going",
          time: "10:30 AM",
        },
        {
          id: 2,
          msg: "Hey, I'm fine Sarah.",
          time: "10:31 AM",
        },
      ],
    },
    {
      name: "James Williams",
      msg: "Are you free tonight?",
      time: "Feb 8",
      unread: "1",
      profileImgUrl: "https://example.com/profiles/jameswilliams.jpg",
      sms: [
        {
          id: 1,
          msg: "Hey, how's it going",
          time: "10:30 AM",
        },
        {
          id: 2,
          msg: "Hey, I'm fine James.",
          time: "10:31 AM",
        },
      ],
    },
    {
      name: "Sophia Martinez",
      msg: "I have some exciting news!",
      time: "Feb 5",
      unread: "0",
      profileImgUrl: "https://example.com/profiles/sophiamartinez.jpg",
      sms: [
        {
          id: 1,
          msg: "Hey, how's it going",
          time: "10:30 AM",
        },
        {
          id: 2,
          msg: "Hey, I'm fine Sophia.",
          time: "10:31 AM",
        },
      ],
    },
    {
      name: "Daniel Jones",
      msg: "Let's plan our trip.",
      time: "Feb 3",
      unread: "3",
      profileImgUrl: "https://example.com/profiles/danieljones.jpg",
      sms: [
        {
          id: 1,
          msg: "Hey, how's it going",
          time: "10:30 AM",
        },
        {
          id: 2,
          msg: "Hey, I'm fine Daniel.",
          time: "10:31 AM",
        },
      ],
    },
    {
      name: "Olivia Johnson",
      msg: "Happy Birthday!",
      time: "Feb 1",
      unread: "0",
      profileImgUrl: "https://example.com/profiles/oliviajohnson.jpg",
      sms: [
        {
          id: 1,
          msg: "Hey, how's it going",
          time: "10:30 AM",
        },
        {
          id: 2,
          msg: "Hey, I'm fine Olivia.",
          time: "10:31 AM",
        },
      ],
    },
    {
      name: "Ethan Garcia",
      msg: "What's your opinion on the new movie?",
      time: "Jan 28",
      unread: "0",
      profileImgUrl: "https://example.com/profiles/ethangarcia.jpg",
      sms: [
        {
          id: 1,
          msg: "Hey, how's it going",
          time: "10:30 AM",
        },
        {
          id: 2,
          msg: "Hey, I'm fine Ethan.",
          time: "10:31 AM",
        },
      ],
    },
    {
      name: "Ava Smith",
      msg: "Can you help me with this issue?",
      time: "Jan 25",
      unread: "2",
      profileImgUrl: "https://example.com/profiles/avasmith.jpg",
      sms: [
        {
          id: 1,
          msg: "Hey, how's it going",
          time: "10:30 AM",
        },
        {
          id: 2,
          msg: "Hey, I'm fine Ava.",
          time: "10:31 AM",
        },
      ],
    },
  ];
  useEffect(() => {
    setInbox(inbox[0]);
  }, []);

  return (
    <>
      <div
        className="flex flex-col gap-2 "
        style={{
          maxHeight: "59vh",
          overflowY: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {inbox.map((items, index) => (
          <div
            onClick={() => setInbox(items)}
            className="h-[60px] px-2 flex flex-row items-center relative gap-2 shadow-md bg-[#efeeee] p-2 custom-shadow border-2 border-slate-300 hover:cursor-pointer"
            key={index}
          >
            <div className="">
              <img
                className="h-[50px] w-[50px] rounded-full border-x-2"
                src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                alt=""
              />
            </div>
            <div className="flex justify-between ">
              <div className="">
                <div className="font-bold">{items.name}</div>
                <div className="text-[10px] w-[80%] overflow-hidden whitespace-nowrap overflow-ellipsis">
                  {items.msg.length > 30
                    ? items.msg.slice(0, 30) + "..."
                    : items.msg}
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 absolute right-1">
                <div className="text-[12px] ">{items.time}</div>
                <div className="text-[15px] rounded-full w-5 h-5 flex justify-center items-center border-2 border-black">
                  {items.unread}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
