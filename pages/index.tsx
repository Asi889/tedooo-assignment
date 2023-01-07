import axios from "axios";
import type { GetServerSidePropsContext, NextPage } from "next";
import { useEffect, useState } from "react";
import ItemsContainer from "../components/ItemsContainer";
import NavBar from "../components/NavBar";
import { ItemType } from "../src/Types";

type Props = {
  allItems:  ItemType[];
};
const Home: React.FC<Props> = (props) => {
  const { allItems } = props;
  const [items,setItems]= useState([...allItems])
  // console.log(items);
  

  return (
    <div className={`mt-20  bg-[#F6F7F7]`}>
      <NavBar />
      <ItemsContainer items={items} />
      
    </div>
  );
};

export default Home;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // try {
  const { data } = await axios.get(`https://dev.tedooo.com/feed.json`, {
    params: { _limit: 6 },
  });
  // items = JSON.parse(data)
  // console.log(items);
  // } catch (error) {

  // }
  // const itmes
  return {
    props: {
      allItems: data.data,
    },
  };
}
