import style from "./Stages.module.scss";
import { Container } from "../Container/Container";
import { Map } from "../Map/Map";
import MAP_ITEM from "../Map/const.json";
import { Step } from "../Step/Step";
import React from "react";
import {STEP_ITEM} from "../Step/const";
import { useParams } from "react-router-dom";

export const Stages = () => {
  const param = useParams();
  
  const [ active, setActive ] = React.useState(param.id);
  return <div className={style.stages}>
    <Container>
      <div className={style.title}>Этапы</div>
      <div className={style.stages_container}>
        <div className={style.map}>
          <div className={style.step_map}>
            {MAP_ITEM?.map(item => <Map key={item.id} path={item.path} 
              target={setActive} active={active === item.path} text={item.text}></Map>)}
          </div>
        </div>
        <div className={style.steps}>
          {STEP_ITEM?.map(item => <Step setActive={setActive} key={item.number} {...item}></Step>)}
        </div>
      </div>
    </Container>
  </div>;
};