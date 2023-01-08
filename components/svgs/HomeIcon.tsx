import React from "react";
import { Mode_data } from "../../context/context";
import { useContext } from "react";

function HomeIcon() {
  const { darkMode, seDarkMode } = useContext(Mode_data);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className='w-6 h-6'
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <path className={` ${darkMode ? "fill-white" : "fill-[#949796]"} hover:fill-[#3de4c0] chat-path-home`}   d="M256 2.938l-256 256v48.427h62.061v201.697h155.152V384.941h77.576v124.121H449.94V307.365H512v-48.427l-256-256zM403.394 260.82v201.697h-62.061V338.396H170.667v124.121h-62.061V260.82H63.943L256 68.762 448.057 260.82h-44.663z"></path>
    </svg>
  );
}

export default HomeIcon;
