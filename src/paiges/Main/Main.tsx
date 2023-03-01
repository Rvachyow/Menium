import style from "./Main.module.scss";
import { ScreenLogo } from "../../components/ScreenLogo/ScreenLogo";
import { InternetShop } from "../../components/InternetShop/InternetShop";
import { WhatuGet } from "../../components/WhatuGet/WhatuGet";
import { Rectangle } from "../../components/Rectangle/Rectangle";
import { Explore } from "../../components/Explore/Explore";
import { Stages } from "../../components/Stages/Stages";
import { FullImage } from "../../components/FullImage/FullImage";
import { AboutMillenium } from "../../components/AboutMillenium/AboutMillenium";
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