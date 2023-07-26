import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../Components/Navbar";
import HomeText from "../Components/HomeText";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeText />
    </div>
  );
}
