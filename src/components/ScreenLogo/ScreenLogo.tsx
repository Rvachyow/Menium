import style from "./ScreenLogo.module.scss";
import { Container } from "../Container/Container";
import { BlueButton } from "../BlueButton/BlueButton";
import React from "react";
export const ScreenLogo = () => {

  const refDiv = React.useRef<any>();
  return <div className={style.screenlogo}>
    <Container>
      <div className={style.block}>
        <div className={style.text}>
          <div className={style.toptext}>
            <div ref={refDiv} className={style.title}>Разработка интернет-магазинов <span>на 1C-Битрикс</span></div>
            <div className={style.topAbout}>
            Разработаем интернет-магазин за 30 дней с уникальным дизайном и <br /> 
            продуманной структурой который <span>выделит вас на фоне конкурентов</span>
            </div>
          </div>
          <div className={style.bottomtext}>
            <BlueButton size="0px 78px">Узнать стоимость</BlueButton>
            <div className={style.about}>
              <p>Оставьте заявку и получите бесплатную консультацию от специалиста,<br /> полный расчет стоимости разработки и бонус:</p>
              <p>«15 сервисов которые покажут стратегию продвижения конкурентов,<br /> всё об их выдаче в поиске и не только»</p>
            </div>
          </div>
        </div>
        <img src="" alt="" />
      </div>
      <div className={style.background}>
        <img className={style.pc} src="../assets/notebock.png" alt="" />
        <img className={style.bg} src="../assets/backround.jpg" alt="" />
      </div>
      <img className={style.arrow} src="./assets/arrow.png" alt="" />
    </Container>
  </div>;
};