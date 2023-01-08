import { useEffect, useState } from "react";

export const useIsBottomOfPage = () => {
  const [isBottomOfPage, setIsBottomOfPage] = useState(false);

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
      
    setIsBottomOfPage(bottom);
  };

  useEffect(() => {
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isBottomOfPage };
};
