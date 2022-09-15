import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import RainbowGradient from "@/components/RainbowGradient";
import Title from "@/components/Title";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <title>Amazing UE DEMO</title>
      <section>
        <RainbowGradient />
      </section>
      <section>
        <Title />
      </section>
    </div>
  );
};

export default Home;
