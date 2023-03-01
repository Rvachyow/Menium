import style from "./Carusel.module.scss";
import React from "react";

export const Carusel = ({ children }:{children:any}) => {
  const [ counterfirst, setcounterFirst ] = React.useState(1);
  const [ second, setSecond ] = React.useState(children[1]);
  const [ countersecond, setcounterSecond ] = React.useState(0);
  const [ first, setFirst ] = React.useState(children[0]);
  
  const nextElement = () => {
    if (countersecond === children.length - 1){
      setcounterSecond(0);
    }else setcounterSecond(countersecond + 1);
    if (counterfirst === children.length - 1){
      setcounterFirst(0);
    }else setcounterFirst(counterfirst + 1);
    setSecond(children[counterfirst]);
    setFirst(children[countersecond]);
  };
  const beforeElement = () => {
    if (countersecond === 0){
      setcounterSecond(children.length-1);
    }else setcounterSecond(countersecond - 1);
    if (counterfirst === 0){
      setcounterFirst(children.length-1);
    }else setcounterFirst(counterfirst - 1);
    setSecond(children[counterfirst]);
    setFirst(children[countersecond]);
  };

  return <div className={style.carusel}>
    <div className={style.carusel_container}>
      <div className={style.items_carusel}>
        <div className={style.first}>{first}</div>
        <div className={style.second}>{second}</div>
      </div>
    </div>
    <button onClick={nextElement} className={style.btnNext}><div className={style.triangle_left}></div></button>
    <button onClick={beforeElement} className={style.btnBefore}><div className={style.triangle_right}></div></button>
  </div>;
};