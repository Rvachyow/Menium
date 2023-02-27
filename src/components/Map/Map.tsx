import style from "./Map.module.scss";
import clsx from "clsx";
import { useNavigate } from "react-router";
import { useInView } from "react-intersection-observer";

export const Map = ({ active, text, target, path }:{ active?: boolean, text: string, target: any, path: string }) => {
  const element = document.getElementById(path);
  const navigate = useNavigate();
  const targetHandle = () => {
    target(path);
    navigate(`/${path}`);
    element?.scrollIntoView();
  };
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  
  return <div onClick={targetHandle} className={style.map}>
    <div className={clsx(style.round, {
      [style.active]:active,
    })}></div>
    <div className={style.text}>{text}</div>
  </div>;
};