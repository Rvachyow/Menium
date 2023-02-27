import { ItemsProps } from "../../types/step";
import style from "./Step.module.scss";
import { useInView } from "react-intersection-observer";
import React from "react";
import { useNavigate } from "react-router";

export const Step = ({ number, title, textFirst, textSecond, path, img, setActive }
  :ItemsProps& {setActive:any} ) => {
  const navigate = useNavigate();
  const { ref, inView, entry } = useInView({
    threshold: 0.7,
  });
  React.useEffect(() =>{
    if(inView){
      setActive(path)
      navigate(`/${path}`)
    }
  },[inView]);
  return <div id={path} ref={ref}  className={style.step}>
    <div className={style.step_content}>
      <div className={style.title}>
        <div className={style.number}><p>{number}</p></div>
        <div className={style.title_title}>{title}</div>
      </div>
      <div className={style.line}></div>
      <div className={style.main_text}>
        <p>{textFirst}</p>
        <p className="">{textSecond}</p>
      </div>
      <img src={img} alt="" />
    </div>
  </div>;
};