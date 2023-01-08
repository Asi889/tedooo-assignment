import React from 'react';
import { Mode_data } from "../../context/context";
import { useContext } from "react";

const Switch = () => {
    const { darkMode, seDarkMode } = useContext(Mode_data);

  return (
    <>
      <input
        className={`react-switch-checkbox `}
        id={`react-switch-new`}
        type="checkbox"
        onClick={()=>seDarkMode(!darkMode)}
      />
      <label
        className={`react-switch-label ${darkMode ? "bg-[#d1c9c9]" : "bg-[#5a5858]"}`}
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button ${darkMode ? "bg-[#ffff]" : "bg-[#ebbdbd]"}`} />
      </label>
    </>
  );
};

export default Switch;