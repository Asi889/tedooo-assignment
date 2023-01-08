/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import { useIsBottomOfPage } from "../src/hooks/useIsBottomOfPage";
import { ItemType } from "../src/Types";
import { ITEM_PER_FEED } from "../src/utils/consts";
import { sleep } from "../src/utils/utils";
import Item from "./Item";
import Loader from "./Loader";

type Props = {
  items: ItemType[] | any;
};

const ItemsContainer: React.FC<Props> = (props) => {
  const { items } = props;
  const amount = useRef(ITEM_PER_FEED);
  const [tempItems, setTempItems] = useState(items.slice(0, amount.current));
  const [loading, setLoading] = useState(false);

  const fetchMoreItems = async () => {
    setLoading(true);
    await sleep(1000);
    amount.current = amount.current + ITEM_PER_FEED;
    setTempItems(items.slice(0, amount.current));
    setLoading(false);
  };

  const { isBottomOfPage } = useIsBottomOfPage();
  useEffect(() => {
    if (isBottomOfPage && !loading) {
      fetchMoreItems();
    }
    
  }, [isBottomOfPage]);

  const mutateImpression = (id: string) => {
    const userId = "MY_USER_ID";
    // console.log(`logging in logging`, id);
    try {
      // axios.get(`https://www.tedooo.com/?userId=${userId}&itemId=${id}`);
    } catch (error) {
      console.warn(`error in logging`, id);
    }
  };

  const [itemImpressions, setItemImpressions] = useState<string[]>([]);
  
  const doImpression = (id: string) => {
    if (!itemImpressions.includes(id)) {
      const newImpressions = [...itemImpressions, id];
      setItemImpressions(newImpressions);
      mutateImpression(id);
    }
  };


  return (
    <main className="pb-6 mx-auto transition duration-700">
      <ul className="flex flex-col gap-y-10 pt-10 mx-auto px-4 max-w-[970px]">
        {tempItems?.map((item: any) => {
          return (
            <li
              key={item.id}
              className={`item mx-auto w-full item-${item.id}`}
              data-item-id={item.id}
            >
              <Item item={item} doImpression={doImpression} />
            </li>
          );
        })}
      </ul>
      {loading && <Loader />}
    </main>
  );
};

export default ItemsContainer;
