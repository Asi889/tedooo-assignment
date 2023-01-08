import { isClient } from "./../utils/utils";
import React, { useEffect } from "react";

export const useIsInViewPort = (ref: any) => {
  const [isIntersecting, setIntersecting] = React.useState(false);

  useEffect(() => {
    if (!isClient() || !ref) {
      return;
    }
    const observer = new IntersectionObserver(([entry]) =>{    
      setIntersecting(entry.isIntersecting)
    }
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};
