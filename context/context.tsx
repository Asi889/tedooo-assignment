import React, { createContext, useState } from "react";
type contextType = {
    darkMode: boolean;
    seDarkMode: Function;
};
const authContextDefaultValues: contextType = {
    darkMode: false,
    seDarkMode: () => {},
    
};
export const Mode_data = createContext<contextType>(authContextDefaultValues);;

function Context({ children }: any) {
    const [darkMode, seDarkMode] = useState<boolean>(true);
  
    return (
      <Mode_data.Provider value={{ darkMode, seDarkMode }}>
        {children}
      </Mode_data.Provider>
    );
  }

  export default Context