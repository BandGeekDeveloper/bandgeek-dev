import Image from "next/image";
import styles from "./styles/page.module.css";
import HomePage from "../components/HomePage";
import "node_modules/react-toastify/dist/ReactToastify.css";
import AboutMe from "../components/AboutMe";

export default function Home() {
  return (
    <div className="main">
      {/* <HomePage /> */}
      <AboutMe />
    </div>
  );
}
