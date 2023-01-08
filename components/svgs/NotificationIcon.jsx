import React from 'react';
import { Mode_data } from "../../context/context";
import { useContext } from "react";

function NotificationIcon() {
  const { darkMode, seDarkMode } = useContext(Mode_data);

    return (
        <svg
      xmlns="http://www.w3.org/2000/svg"
      className='w-[30px] h-[30px]'
      fill="#000"
      viewBox="0 0 32 32"
    >
      <path className={`${darkMode ? "fill-white" : "fill-[#949796]"} hover:fill-[#3de4c0] chat-path-hom`} d="M30 24a6 6 0 01-6-6v-4a8 8 0 00-5.39-7.55A3 3 0 0019 5a3 3 0 00-6 0 3 3 0 00.39 1.45A8 8 0 008 14v4a6 6 0 01-6 6v2h9.1a5 5 0 004.9 4 4.67 4.67 0 004.91-4H30zM15 5a1 1 0 111 1 1 1 0 01-1-1zm1 23a3 3 0 01-2.82-2h5.68A2.7 2.7 0 0116 28zm-8.71-4A8 8 0 0010 18v-4a6 6 0 0112 0v4a8 8 0 002.71 6z"></path>
    </svg>
    );
}

export default NotificationIcon;