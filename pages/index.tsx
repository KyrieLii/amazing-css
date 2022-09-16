import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import RainbowGradient from "@/components/RainbowGradient";
import Title from "@/components/Title";
import Button from "@/components/Button";

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
      <section>
        <Button />
      </section>
    </div>
  );
};

export default Home;
