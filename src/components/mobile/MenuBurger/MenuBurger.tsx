import style from "./MenuBurger.module.scss";
import ReactDOM from "react-dom";
import { Container } from "../../Container/Container";
import React from "react";

const portal = document.getElementById("portal");

export const MenuBurger = ({ handleActive }:{handleActive: any}) => 
 
  ReactDOM.createPortal(
    <div className={style.burger}>
      <Container>
        <div className={style.burger_container}>
          <div onClick={handleActive} className={style.exit}>
            <img  src="./assets/exit.png" alt="" />
          </div>
          <nav className={style.navbar}>
            <ul className={style.navitems}>
              <li>Главная</li>
              <li>Цены</li>
              <li>Кейсы и отзывы</li>
              <li>Контакты</li>
            </ul>
            <div className={style.info}>
              <p>info@millenium.ru</p>
              <p>+7 (495) 792-66-69<br></br>пн-пт 10:00–19:00</p>
            </div>
          </nav>
        </div>
      </Container>
    </div>,
    //@ts-ignore
    portal,
);