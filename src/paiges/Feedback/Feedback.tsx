import style from "./Feedback.module.scss";
import { Container } from "../../components/Container/Container";
import { Carusel } from "../../components/Carousel/Carusel";

export const Feedback = () => {
  return <div className={style.feedback}>
    <Container>
      <div className={style.feedback_container}>
        <div className={style.title}><h3>Избранные <span>проекты</span></h3>
          <img src="./assets/rock.png" alt="" />
        </div>
        <div className={style.carusel}>
          <Carusel>
            <img src="./assets/Shot1.png" alt="" />
            <img src="./assets/Shot2.png" alt="" />
          </Carusel>
        </div>
        <div className={style.about}>
          <h3>Отзывы о <span>работе</span></h3>
        </div>
      </div>
    </Container>
  </div>;
};