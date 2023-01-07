import { isClient, isInViewport } from "./../utils/utils";
import { useRef, useState } from "react";
import { useEffect } from "react";
export const useOnScroll = () => {
  const [isScrollToEnd, setIsScrollToEnd] = useState(false);
  const [elInViews, setElInViews] = useState<string[]>([]);

  const onScroll = (e: Event) => {
    let documentHeight = document.body.scrollHeight;
    let currentScroll = window.scrollY + window.innerHeight;
    // When the user is [modifier]px from the bottom, fire the event.
    const modifier = 50;
    const isBottom = currentScroll + modifier > documentHeight;
    setIsScrollToEnd(isBottom);
    // const items = Array.from(document.querySelectorAll("[data-item-id]"))
    //   .filter((el) => isInViewport(el))
    //   .map((el) => el.getAttribute("data-item-id"))
    //   .filter((id) => id && !elInViews.includes(id));
      
    // setElInViews([...elInViews, ...items]);
  };

  useEffect(() => {
    if (isClient()) {
      document.addEventListener("scroll", onScroll, true);
    }

    return () => {
      if (isClient()) {
        document.removeEventListener("scroll", onScroll);
      }
    };
  }, []);

  return { isScrollToEnd, elInViews };
};
