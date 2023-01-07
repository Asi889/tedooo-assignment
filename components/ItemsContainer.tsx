/* eslint-disable @next/next/no-img-element */
import React, {
  createRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Item from "./Item";
import { ItemType } from "../src/Types";
import { isInViewport, sleep } from "../src/utils/utils";
import { ITEM_PER_FEED } from "../src/utils/consts";
import { useIsInViewPort } from "../src/hooks/isInViewPorto";
type Props = {
  items: ItemType[] | any;
};

const ItemsContainerNew: React.FC<Props> = (props) => {
  const { items } = props;
  const amount = useRef(ITEM_PER_FEED);
  const [tempItems, setTempItems] = useState(items.slice(0, amount.current));
  const [loading, setLoading] = useState(false);
  const [visitedElements, setVisitedElements] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const observer = useRef<HTMLDivElement[] | any>([]);
  observer.current = tempItems.map((el: Element, i: number) => observer.current[i] ?? createRef());
  
  const fetcMoreItems = async () => {
    setLoading(true);
    await sleep(1000);
    amount.current = amount.current + ITEM_PER_FEED;
    setTempItems(items.slice(0, amount.current));
    setLoading(false);
  };

  const handleScroll = () => {
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
    // checkInView()
    if (bottom) {
      fetcMoreItems();
      console.log("at the bottom");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const checkInView = ()=>{
        observer.current.map((el: any)=>{
            // console.log(useIsInViewPort(el));
            
        })
  }
  return (
    <div className="grid gri gap-y-10 pt-10">
      {tempItems?.map((item: any, index: number) => {
        return (
          <div
            key={item.id}
            className={`item item-${item.id}`}
            data-item-id={item.id}
          >
            <Item ref={observer.current[index]} item={item} />
          </div>
        );
      })}
      {loading ? (
        <img
          className="justify-self-center w-20 h-20"
          src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif"
          alt=""
        />
      ) : (
        ""
      )}
    </div>
  );
};



export default ItemsContainerNew;
