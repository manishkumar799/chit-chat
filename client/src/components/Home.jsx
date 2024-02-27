import React, { useEffect, useState } from "react";
import Card from "./Card";
import Menu from "./Menu";
import Suggestions from "./Suggestions";
import Notifications from "./Notifications";
import Inbox from "./Inbox";
import { CiCirclePlus } from "react-icons/ci";
import io from "socket.io-client";

const socket = io("http://localhost:3000", { transports: ["websocket"] });
socket.emit("Join");



function Home() {
  const [inbox, setInbox] = useState();
  const [conversation, setConversation] = useState([
    {
      s_id:'John',
      c_id: 1,
      name: "John Doe",
      msg: "Hey, how's it going?",
      time: "10:30 AM",
      unread: "3",
      profileImgUrl: "https://example.com/profiles/johndoe.jpg",
      sms: [
        {
          id: 2,
          msg: "Hey, how's it going",
          time: "10:30 AM",
        },
        {
          id: 1,
          msg: "Hey, I'm fine John.",
          time: "10:31 AM",
        },
      ],
    },
    {
      s_id:'Alice',
      c_id: 2,
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
      s_id:'David',
      c_id: 3,
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
          id: 3,
          msg: "Hey, I'm fine David.",
          time: "10:31 AM",
        },
      ],
    },
    {
      s_id:'Emily',
      c_id: 4,
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
          id: 4,
          msg: "Hey, I'm fine. Emiliy",
          time: "10:31 AM",
        },
      ],
    },
    {
      s_id:'Michael',
      c_id: 5,
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
          id: 5,
          msg: "Hey, I'm fine.Michael",
          time: "10:31 AM",
        },
      ],
    },
    {
      s_id:'Sarah',
      c_id: 6,
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
          id: 6,
          msg: "Hey, I'm fine Sarah.",
          time: "10:31 AM",
        },
      ],
    },
    {
      s_id:'James',
      c_id: 7,
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
          id: 7,
          msg: "Hey, I'm fine James.",
          time: "10:31 AM",
        },
      ],
    },
    {
      s_id:'Sophia',
      c_id: 8,
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
          id: 8,
          msg: "Hey, I'm fine Sophia.",
          time: "10:31 AM",
        },
      ],
    },
    {
      s_id:'Daniel',
      c_id: 9,
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
          id: 9,
          msg: "Hey, I'm fine Daniel.",
          time: "10:31 AM",
        },
      ],
    },
    {
      s_id:'Olivia',
      c_id: 10,
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
          id: 10,
          msg: "Hey, I'm fine Olivia.",
          time: "10:31 AM",
        },
      ],
    },
    {
      s_id:'Ethan',
      c_id: 11,
      name: "Ethan Garcia",
      msg: "What's your opinion on the new movie?",
      time: "Jan 28",
      unread: "0",
      profileImgUrl: "https://example.com/profiles/ethangarcia.jpg",
      sms: [
        {
          id: 11,
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
      s_id:'Ava',
      c_id: 12,
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
          id: 12,
          msg: "Hey, I'm fine Ava.",
          time: "10:31 AM",
        },
      ],
    },
  ]);

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
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type=""
                  id="default-search"
                  className="block w-full h-8 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 shadow-xl"
                  placeholder="Search friends, groups..."
                  required
                />
                {/* <input className="w-full" type="text" placeholder="search" /> */}
              </div>

              <Card setInbox={setInbox} conversation={conversation} />
            </div>
          </div>
          <div className=" w-[60%] relative ">
            {!inbox ? (
              <div className="h-full w-full flex justify-center items-center">
                Please select chat to start conversation...
              </div>
            ) : (
              <Inbox inboxData={inbox} setInbox={setInbox} socket={socket} />
            )}
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
