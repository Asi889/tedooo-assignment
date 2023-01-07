import React, { useState } from "react";
import ChatIcon from "./svgs/ChatIcon";
import HomeIcon from "./svgs/HomeIcon";
import NotificationIcon from "./svgs/NotificationIcon";

const NavBar = () => {
  const [input, setInput] = useState("");
  const navbarButtons = [
    {
      img: "",
      tagName: "Home",
    },
    { img: "", tagName: "Messaging" },
    { img: "", tagName: "Notification" },
  ];

  const [iconColor, setIconColor] = useState(false)

  let gg = "you";
  return (
    <div className="w-screen h-20 bg-white flex justify-between fixed inset-0">
      <div className="flex pl-1 items-center">
        <div className="w-12 h-12 bg-[#57b686]"></div>
        <input
          type="text"
          
          placeholder="input"
          className="rounded-full bg-gray-200 h-10"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div  className="flex items-center pr-20 gap-x-6">
        {navbarButtons.map((btn) => {
          return (
            <a
              href="#"
              key={btn.tagName}
              
              className="flex flex-row-reverse nav-tag text-gray-600 h-full items-center hover:text-[#3de4c0] hover:border-b-4 hover:border-[#3de4c0] transition-all  ease-in"
            >
              {/* <div className="w-8 h-8 bg-[#eb8888]"></div> */}
              <h3 className="text-2xl tag-name flex h-full items-center ">{btn.tagName}</h3>
              {btn.tagName === "Home"? <HomeIcon /> : btn.tagName === "Messaging" ? <ChatIcon /> : <NotificationIcon />}
            </a>
          );
        })}
        <div className="rounded-full bg-gray-500 w-12 h-12 self-center "></div>
      </div>
    </div>
  );
};

export default NavBar;
