import style from "./Footer.module.scss";
import React from "react";
import { Container } from "../Container/Container";
import { BlueButton } from "../BlueButton/BlueButton";
export const Footer = React.forwardRef((props?:any, ref?:any):any =>{
  
  return <div className={style.footer}>
    <Container>
      <div className={style.footer_container}>
        <div className={style.title}>Напишите нам</div>
        <div className={style.contacts}>
          <div className={style.email}><span>info@millenium.ru</span></div>
          <BlueButton size="0px 105px">Заказать звонок</BlueButton>
        </div>
        <div className={style.line}></div>
        <div className={style.adress}>
          <div className={style.street}>Москва,ул. Профсоюзная 76, <br /> БЦ «ГАЛЕРЕЯ 76» 2 этаж</div>
          <div className={style.socials}>
            <img src="./assets/telegram.png" alt="" />
            <img src="./assets/whatsapp.png" alt="" />
          </div>
        </div>
        <div className={style.numbers}>+7 (495) 792-66-69<br />пн-пт 10:00–19:00</div>
        <div className={style.logo}>
          <div className={style.img_logo}>
            <img src="./assets/LogoWhite.svg" alt="" />
          </div>
          <div className={style.data}>© 2018–2021 | Millenium - создание интернет-магазинов на 1С Битрикс</div>
          <div className={style.text_politics}>Политика конфиденциальности</div>
        </div>
      </div>
    </Container>
  </div>;
});
  


