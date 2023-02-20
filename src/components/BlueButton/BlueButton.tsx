import style from "./BlueButton.module.scss";
import React from "react";
export const BlueButton = ({ children, size }: { children?: string, size?: string }) => {
  const btnRef = React.useRef<any>();
  React.useEffect(() => {
    btnRef.current.style.padding = size;
  },[]);
  return <button ref={btnRef} className={style.btn}>{children}</button>;
};