import axios from "axios";
import type { GetServerSidePropsContext } from "next";
import ItemsContainer from "../components/ItemsContainer";
import NavBar from "../components/NavBar";
import { ItemType } from "../src/Types";
import { Mode_data } from "../context/context";
import { useContext } from "react";

type Props = {
  allItems: ItemType[];
};
const Home: React.FC<Props> = ({ allItems }) => {
  const { darkMode, seDarkMode } = useContext(Mode_data);

  return (
    <div className={`transition-colors duration-300 ease-in mt-20 ${darkMode? "bg-[#2f3a3a]" : "bg-[#F6F7F7]"}  `}>
      <NavBar />
      <ItemsContainer items={allItems} />
    </div>
  );
};

export default Home;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { data } = await axios.get(`https://dev.tedooo.com/feed.json`);

  return {
    props: {
      allItems: data.data,
    },
  };
}
