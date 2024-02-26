import React, { useState, useRef, useEffect } from "react";
import { MdVideoCall, MdCall } from "react-icons/md";
import { SlOptions } from "react-icons/sl";
import { BsEmojiSmile, BsSendFill } from "react-icons/bs";
import { TiAttachmentOutline } from "react-icons/ti";

function Inbox({ inboxData, setInbox,socket }) {
  const [msg, setMsg] = useState("");
  const [allMsg, setAllMsg] = useState(inboxData?.sms);
  const messageContainerRef = useRef(null);
  const textareaRef = useRef(null);
  const [showTime, setShowTime] = useState(false);
  socket.emit('John-Alice', inboxData.c_id);

  // Function to scroll down to the end of the message container
  const scrollToBottom = () => {
    messageContainerRef.current.scrollTop =
      messageContainerRef.current.scrollHeight;
  };

  // Scroll to the bottom whenever allMsg updates
  useEffect(() => {
    scrollToBottom();
    // setInbox({ ...inboxData, sms: allMsg });
  }, [allMsg]);

  useEffect(() => {
    setAllMsg(inboxData?.sms);
  }, [inboxData]);

  // Function to handle sending a message
  const sendMessage = () => {
    msg != "" && setAllMsg([...allMsg, { id: inboxData.c_id, msg, time: Date.now() }]);
    socket.emit(inboxData.s_id, { id: inboxData.c_id, msg, time: Date.now() });
    setMsg(""); // Clear the message input
    textareaRef.current.value = ""; // Clear the textarea
    // inboxData.sms = allMsg;
    // inboxData.sms.push({ id: 2, msg, time: "10:52AM" })
  };
  // useEffect(() => {
  //   socket.on("message", (message) => {
  //     setAllMsg([...allMsg, message]);
  //   });
  // }, [messages]);

  useEffect(() => {
    inboxData.sms = allMsg;
    setInbox(inboxData);
    socket.on(inboxData.s_id, (message) => {
      console.log(message)
      setAllMsg([...allMsg, message]);
    });
  }, [allMsg]);

  return (
    <>
      <div className="flex flex-col shadow-xl">
        {/* Header */}
        <div className="px-4 flex items-center h-[63px] bg-white">
          {/* Profile Picture and Name */}
          <div className="w-[10%]">
            <img
              className="h-[50px] w-[50px] rounded-full border-x-2 hover:cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
              alt=""
            />
          </div>
          <div className="w-[70%]">
            <div className="font-bold text-lg">{inboxData?.name}</div>
            <div className="text-[12px]">Last seen 30 minutes ago.</div>
          </div>
          {/* Call and Options Icons */}
          <div className="flex gap-7">
            <div className="hover:cursor-pointer">
              <MdCall size={30} />
            </div>
            <div className="hover:cursor-pointer">
              <MdVideoCall size={30} />
            </div>
            <div className="hover:cursor-pointer">
              <SlOptions size={30} />
            </div>
          </div>
        </div>
        {/* Message Container */}
        <div
          ref={messageContainerRef}
          className="absolute bottom-20 end-0 flex flex-col gap-2 px-6 w-full items-end py-1"
          style={{
            maxHeight: "70vh",
            overflowY: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {allMsg?.map((item, index) => (
            <div
              key={index}
              onClick={() => setShowTime(!showTime)}
              className={`${
                item.id != inboxData.c_id ? "bg-slate-500 self-start" : "bg-black self-end"
              } text-white px-5 py-2 rounded-lg inline-block min-w-[50px] max-w-[80%] `}
            >
              {item.msg}{" "}
              <span
                className={`text-[10px]  justify-end ${
                  showTime ? "flex" : "hidden"
                }`}
              >
                {item.time}
              </span>
            </div>
          ))}
        </div>
        {/* Message Input */}
        <div className="h-[63px] w-full flex justify-center items-center absolute bottom-3 shadow-xl border-2 border-bold border-t-[#B5C0D0]">
          <div className="absolute inset-y-0 start-14 flex items-center hover:cursor-pointer">
            <BsEmojiSmile size={20} />
          </div>
          <div className="absolute inset-y-0  flex items-center ps-3 start-2 top-[10px] w-[60px] h-[40px] hover:cursor-pointer">
            <TiAttachmentOutline size={30} />
          </div>
          <textarea
            ref={textareaRef}
            type="text"
            className="block w-[80%]  p-2 ps-10 pe-10 text-sm text-gray-900 border border-gray-500 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 h-10 max-h-10 min-h-10"
            placeholder="Type a message here..."
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
            required
          />
          <div
            className="absolute end-6 w-[60px] h-[40px] flex items-center justify-center shadow-xl rounded-xl bg-blue-700 hover:cursor-pointer"
            onClick={sendMessage}
          >
            <BsSendFill color="white" size={25} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Inbox;
