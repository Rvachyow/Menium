import style from "./CheckBox.module.scss";
import React from "react";
export const CheckBox = () => {
  const [ active, setActive ] = React.useState(true);
  const toggle = () => {
    setActive(!active);
  };
  return <div onClick={toggle} className={style.checkbox}>
    {active? <img src="./assets/v.svg" alt="" /> : ""}
  </div>;
};