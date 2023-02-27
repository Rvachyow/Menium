import style from "./Rectangle.module.scss";
import { Container } from "../Container/Container";
export const Rectangle = () => {
  return <div className={style.rectangle}>
    <Container>
      <div className={style.rectangle_container}>
        <div className={style.regalia}>
          <div className={style.content}>
            <div className="items">
              <img src="./assets/gold.png" alt="" />
            </div>
            <div className={style.items}>
              <div className={style.title}>Сертификат</div>
              <div className={style.text}>Золотой сертифицированный <br /> партнер битрикс</div>
              <img className={style.img} src="./assets/ser1.png" alt="" />
            </div>
            <div className={style.items}>
              <div className={style.title}>Сертификат</div>
              <div className={style.text}>Прграммы мониторинга <br /> качества внедрений</div>
              <img className={style.img} src="./assets/ser2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>;
};