import type { NextPage } from "next";
import Title from "@/components/Title";
import Button from "@/components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <title>Amazing UE DEMO</title>
        </SwiperSlide>
        <SwiperSlide>
          <Title />
        </SwiperSlide>
        <SwiperSlide>
          <Button />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
