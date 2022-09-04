/**
 * by https://nextjs.org/conf 👍🏻
 */
import styles from "./index.module.scss";

const RainbowGradient = () => (
  <div className={styles.outer}>
    <div className={styles.wrapper}>
      <div className={styles.rainbowGradient}></div>
      <div className={styles.childWrapper}>
        <button className={(styles.btn, styles.btn_reset)}>
          Rainbow Gradient
        </button>
      </div>
    </div>
  </div>
);

export default RainbowGradient;
