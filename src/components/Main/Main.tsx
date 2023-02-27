import style from "./Main.module.scss";
import { ScreenLogo } from "../ScreenLogo/ScreenLogo";
import { InternetShop } from "../InternetShop/InternetShop";
import { WhatuGet } from "../WhatuGet/WhatuGet";
import { Rectangle } from "../Rectangle/Rectangle";
import { Explore } from "../Explore/Explore";
import { Stages } from "../Stages/Stages";
import { FullImage } from "../FullImage/FullImage";
import { AboutMillenium } from "../AboutMillenium/AboutMillenium";
export const Main = () => {
  return  <div className={style.main}>
    <ScreenLogo></ScreenLogo>
    <InternetShop></InternetShop>
    <WhatuGet></WhatuGet>
    <Rectangle></Rectangle>
    <Explore></Explore>
    <Stages></Stages>
    <FullImage></FullImage>
    <AboutMillenium></AboutMillenium>
  </div>;
};