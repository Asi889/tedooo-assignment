/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Rotate as Hamburger } from "hamburger-react";
import NavLinks from "./NavLinks";
import { Mode_data } from "../context/context";
import { useContext } from "react";
import Switch from "./svgs/Switch";
const NavBar = () => {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navbarButtons = [
    {
      img: "",
      tagName: "Home",
    },
    { img: "", tagName: "Messaging" },
    { img: "", tagName: "Notification" },
  ];

  const { darkMode } = useContext(Mode_data);
 
  return (
    <div className={`w-screen h-20 transition duration-300 ${darkMode ? "bg-[#8a8b8d]" : "bg-white"} flex justify-between fixed inset-0`}>
      <div className="flex pl-1 items-center">
        <img
          className="w-full h-12"
          src="https://is2-ssl.mzstatic.com/image/thumb/Purple122/v4/6e/71/6a/6e716a96-99c1-bb66-4a7a-b66f7886975d/AppIcon-0-0-1x_U007emarketing-0-10-0-0-85-220.png/1200x600wa.png"
          alt=""
        />
        <input
          type="text"
          placeholder="input"
          className={`rounded-full  ${darkMode ? "bg-[#F4F5F5]" : "bg-[#F4F5F5]"} h-10 pl-4 ml-2 lg:w-auto w-[100px]`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="flex  pr-[25px] relative items-center">
        <Switch /> 
        <div className="hidden lg:flex  items-center px-4 gap-x-6">
          <NavLinks buttons={navbarButtons} isOpen={isOpen} />
        </div>

        <div className="flex lg:hidden  transition duration-700 items-center relative ">
          <Hamburger toggled={isOpen} onToggle={() => setIsOpen(!isOpen)} />
          <div
            className={`  ${
              !isOpen ? "h-0 hidden" : "grid h-auto"
            } absolute md:-left-[160px] -left-[70px] top-12 md:top-[40px] transition-all duration-700 items-center gap-y-4  ${darkMode ? "bg-[#666566]" : "bg-[#f0eff5]"} p-2 rounded-lg`}
          >
            <NavLinks buttons={navbarButtons} isOpen={isOpen} />
          </div>
        </div>

        <div className="rounded-full bg-gray-500 w-12 h-12 self-center ">
          <img
            className="rounded-full h-12 w-12 border-2 border-[#949796] "
            src="https://res.cloudinary.com/dvdzjj8jo/image/upload/v1639907803/Asaf_up6v4r.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
