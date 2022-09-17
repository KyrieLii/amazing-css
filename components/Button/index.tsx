// inspire by https://fossheim.io/

import RainbowGradient from "./RainbowGradient";
import HoverButton from "./HoverButton";

import style from "./index.module.scss";

const Buttons = () => (
  <div className={style.btns}>
    <HoverButton />
    <RainbowGradient />
  </div>
);

export default Buttons;
