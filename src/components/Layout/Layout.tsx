import style from "./Layout.module.scss";
import React from "react";
import { Footer } from "../Footer/Footer";
export const Layout = ({ children, header, footer }:{ children?: React.ReactNode, 
    header: React.ReactNode, 
    footer: React.ReactNode }) => {
  const refIrl = React.useRef<any>();
  
  return <div className={style.wrapper}>
    {header}
    {children}
    <Footer ref={refIrl}/>
  </div>;
};