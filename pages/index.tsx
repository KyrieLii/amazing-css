import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import RainbowGradient from "@/components/RainbowGradient";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <title>Amazing UE DEMO</title>
      <section>
        <RainbowGradient />
      </section>
    </div>
  );
};

export default Home;
