import { isClient, isInViewport } from "../utils/utils";
import React, { useMemo, useRef, useState } from "react";
import { useEffect } from "react";

export const useIsInViewPort = (ref:any) => {
  const [isIntersecting, setIntersecting] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};
