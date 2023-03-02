import style from "./Carusel.module.scss";
import React from "react";
import clsx from "clsx";

export const Carusel = ({ children }:{children?:any}) => {
  
  const [ active, setActive ] = React.useState(true);
  const nextElement = () => {
    setActive(!active)
  };
  const beforeElement = () => {
    setActive(!active)
  };

  return <div className={style.carusel}>
    <div className={style.carusel_container}>
      <div className={style.items_carusel}>
        <img src="./assets/Shot1.png" className={clsx(style.active, {[style.notactive]:active,
        })} alt="" />
        <img className={clsx(style.active, {[style.notactive]:!active,
        })} src="./assets/Shot2.png" alt="" />
      </div>
    </div>
    <button onClick={nextElement} className={style.btnNext}><div className={style.triangle_left}></div></button>
    <button onClick={beforeElement} className={style.btnBefore}><div className={style.triangle_right}></div></button>
  </div>;
};