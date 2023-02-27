import style from "./BlueButton.module.scss";
import React from "react";
export const BlueButton = ({ children, size, colorBG, color }: 
  { children?: string, size?: string, colorBG?: string, color?:any }) => {
  const btnRef = React.useRef<any>();
  React.useEffect(() => {
    btnRef.current.style.padding = size;
    btnRef.current.style.backgroundColor = colorBG;
    btnRef.current.style.color = color;

  },[]);
  return <button ref={btnRef} className={style.btn}>{children}</button>;
};