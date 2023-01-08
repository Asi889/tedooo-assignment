/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
import Rreact, { useEffect, useRef, useState } from "react";
import { useIsInViewPort } from "../src/hooks/useIsInViewPort";
import { ItemType } from "../src/Types";
import ChatIcon from "./svgs/ChatIcon";
import LikeIcon from "./svgs/LikeIcon";
import RoundLikeIcon from "./svgs/RoundLikeIcon";
import { Mode_data } from "../context/context";
import { useContext } from "react";

interface ItemProps {
  item: ItemType;
  doImpression: (aid: string) => void;
}
const Item = ({ item, doImpression }: ItemProps) => {

  const [isLiked, setIsLiked] = useState(false);
  const elementRef = useRef(null);
  const isInViewPort = useIsInViewPort(elementRef);
  const { darkMode } = useContext(Mode_data);

  useEffect(() => {
    if (isInViewPort) {
      doImpression(item.id);
    }
  }, [isInViewPort]);

  return (
    <section
      ref={elementRef}
      className={`max-w-full w-full ${darkMode ? "bg-[#8a8b8d]" : "bg-white"} shadow-2xl mx-auto gap-y-4 rounded`}
    >
      <header className="w-full flex gap-x-2 px-6 py-2 items-center">
        <div>
          <img className="w-10 h-10 rounded-full" src={item?.avatar} alt="" />
        </div>
        <div className="grid">
          <h3 className={`${darkMode  ? "text-[#ffff]" : "text-[#363535]"} text-lg`}>{item?.shopName}</h3>
          <span className="flex">
            <p className={` ${darkMode  ? "text-blue-200" : "text-blue-400"} text-base`}>{item?.shopName}</p>
            <p className="text-gray-300">-1h</p>
          </span>
        </div>
      </header>
      <div
        className={` bg-[#B8C248] h-full max-h-[480px] flex gap-x-2 justify-center overflow-hidden`}
      >
        {[...item.images].slice(0, 2)?.map((img: string, index: number) => {
          return (
            <div key={index} className={`w-full h-full`}>
              <img
                src={img}
                alt={item.text}
                className={` object-cover  mx-auto object-center w-full h-full`}
              />
            </div>
          );
        })}
      </div>

      <footer className={`grid ${darkMode ? "bg-[#8a8b8d]" : "bg-white"}`}>
        <div className="flex justify-between px-10 py-2">
          <div className="flex gap-x-4">
            <RoundLikeIcon /> <p className={`tag-name ${darkMode ? "text-[#ffff]" : "text-[#484E4C]"}`}>{item.likes}</p>
          </div>
          <p className={` ${darkMode ? "text-[#ffff]" : "text-[#484E4C]"}`}>{item.comments} Comments</p>
        </div>
        <div className="grid grid-cols-2 py-2 border-t-[1px] border-gray-400">
          <button
            className={`flex flex-row-reverse items-center tag-name px-6 mx-auto group gap-x-2 hover:text-[#0A66C2] ${
              isLiked ? "text-[#0A66C2] font-bold" : darkMode ? "text-[#ffff]" : "text-[#484E4C]"
            }`}
            onClick={() => setIsLiked(!isLiked)}
          >
            <p className="tag-name transition"> Like</p>
            <LikeIcon />
          </button>
          <button className="flex flex-row-reverse items-center tag-name mx-auto  gap-x-2">
            <p className={`tag-name ${darkMode ? "text-[#ffff]" : "text-[#484E4C]"}`}> Comment</p>
            <ChatIcon />
          </button>
        </div>
      </footer>
    </section>
  );
};

export default Item;
