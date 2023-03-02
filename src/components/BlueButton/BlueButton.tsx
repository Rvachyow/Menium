import style from "./BlueButton.module.scss";
import React from "react";
import { Modal } from "../Modal/Modal";
export const BlueButton = ({ children, size, colorBG, color }: 
  { children?: string, size?: string, colorBG?: string, color?:any }) => {
  const [ active, setActive ] = React.useState(false);
  const handlerActive = () => {
    setActive(!active);
  };
  const btnRef = React.useRef<any>();
  React.useEffect(() => {
    btnRef.current.style.padding = size;
    btnRef.current.style.backgroundColor = colorBG;
    btnRef.current.style.color = color;

  },[]);
  return <><Modal setActive={setActive} active={active}></Modal>
    <button onClick={handlerActive} ref={btnRef} className={style.btn}>{children}</button></>;
};