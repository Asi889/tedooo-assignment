import React from 'react';
import ChatIcon from './svgs/ChatIcon';
import HomeIcon from './svgs/HomeIcon';
import NotificationIcon from './svgs/NotificationIcon';
import { Mode_data } from "../context/context";
import { useContext } from "react";

function NavLinks(props: any) {
    const {buttons, isOpen} = props;
    const { darkMode, seDarkMode } = useContext(Mode_data);

    return (
        <>
       { buttons.map((btn: any) => {
            return (
              <a
                href="#"
                key={btn.tagName}
                className={`nav-links flex gap-x-2 flex-row-reverse nav-tag  ${darkMode? " text-[#ffff]" : "text-[#949796]"} h-full items-center hover:text-[#3de4c0] hover:border-b-4 hover:border-[#3de4c0] transition-all  ease-in`}
              >
                <h3 className={`tag-name flex  h-full items-center ${isOpen ? "text-xl font-medium" :`lg:text-xl text-base font-medium `}`}>
                  {btn.tagName}
                </h3>
                {btn.tagName === "Home" ? (
                  <HomeIcon />
                ) : btn.tagName === "Messaging" ? (
                  <ChatIcon />
                ) : (
                  <NotificationIcon />
                )}
              </a>
            );
          })}
          </>
    );
}

export default NavLinks;