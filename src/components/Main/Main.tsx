import style from "./Main.module.scss";
import { ScreenLogo } from "../ScreenLogo/ScreenLogo";
import { InternetShop } from "../InternetShop/InternetShop";
import { WhatuGet } from "../WhatuGet/WhatuGet";
export const Main = () => {
  return  <div className={style.main}>
    <ScreenLogo></ScreenLogo>
    <InternetShop></InternetShop>
    <WhatuGet></WhatuGet>
  </div>;
};