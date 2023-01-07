/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
import React, { forwardRef } from "react";
import { ItemType } from "../src/Types";
import LikeIcon from "./svgs/LikeIcon";
import ChatIcon from "./svgs/ChatIcon";
import RoundLikeIcon from "./svgs/RoundLikeIcon";

type Props = {
  item: ItemType;
//   ref:any
};
export type Ref = HTMLDivElement;


const Item= forwardRef<Ref, Props>( (props,ref) => {
  const { item } = props;
//   console.log(ref);
//   console.log("ref");


  return (
    <div ref={ref}  className="max-w-[970px] w-full  bg-white shadow-2xl mx-auto gap-y-4">
      <div className="w-full flex gap-x-2 px-6 py-2 items-center">
        <div>
          <img className="w-10 h-10 rounded-full" src={item?.avatar} alt="" />
        </div>
        <div className="grid">
          <h3 className="text-[#363535] text-lg">{item?.shopName}</h3>
          <span className="flex">
            <p className="text-blue-400 text-base">{item?.shopName}</p>
            <p className="text-gray-300">-1h</p>
          </span>
        </div>
      </div>
      <div
        className={` bg-[#B8C248] h-full max-h-[480px] max-w-[970px] flex gap-x-4 justify-center overflow-hidden`}
      >
        {item.images?.map((img: string, index: number) => {
          if (index > 1) return;
          return (
            <img
              key={index}
              className={`w-full h-full object-cover ${
                item.images.length > 1 ? "" : " px-[85px]"
              }`}
              src={img}
              alt=""
            />
          );
        })}
      </div>

      <div className="grid bg-white">
        <div className="flex justify-between px-10 py-2">
          <div className="flex gap-x-4">
            <RoundLikeIcon /> <p>{item.likes}</p>
          </div>
          <p>{item.comments} Comments</p>
        </div>
        <div className="flex justify-evenly py-2 border-t-[1px] border-gray-400">
            <div className="flex">
          <a href="#" className="flex flex-row-reverse items-center tag-name">
            <p className="tag-name"> Like</p>
            <LikeIcon />
          </a>

            </div>
          <a href="#" className="flex flex-row-reverse items-center tag-name">
            <p className="tag-name"> Comment</p>
            <ChatIcon />
          </a>
        </div>
      </div>
    </div>
  );
});

export default Item;
