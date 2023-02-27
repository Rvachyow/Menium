import style from "./Mobileheader.module.scss";
import { Container } from "../../Container/Container";
import React from "react";
import { MenuBurger } from "../MenuBurger/MenuBurger";
import clsx from "clsx";

export const Mobileheader = () => {
  const [ active, setActive ] = React.useState(false);
  const handleActive = () => {
    setActive(!active);
  };

  return <div className={clsx(style.containermob, {
    [style.active]:active,
  })}>
    <Container>
      <div className={style.mobileheader}>
        <div onClick={handleActive} className={style.menu}>
          {active? <><div className={style.line1}></div>
            <div className={style.line2}></div>
            <div className={style.lineGreen}></div></>: 
            <><div className={style.line1}></div>
              <div className={style.line2}></div>
              <div className={style.line3}></div></>}
        </div>
        <div className={style.logo}>
          <img src="./assets/mobilelogo.png" alt="" />
        </div>
        <div className={style.iconphone}>
          <img src="./assets/phone.png" alt="" />
        </div>
      </div>
    </Container>
    {active? <MenuBurger/> : ""}
  </div>;
};
