import style from "./Explore.module.scss";
import { Container } from "../Container/Container";
export const Explore = () => {
  return <div className={style.explore}>
    <Container>
      <div className={style.explore_container}>
        <div className={style.content}>
          <div className={style.item}>
            <div className={style.title}>Исследуем <span>бизнес</span></div>
            <div className={style.text}>
              <p>Каждый клиент – своя история. Мы не берем шаблонные решения, а исследуем рынок конкретно под ваши цели и задачи. </p>
              <p>Сделать интернет-магазин с нуля непросто. 
                    Нужен сайт с качественной разработкой дизайна, 
                    который не будет отвлекать от сути, 
                    наполнением и рабочими модулями. 
                    Кроме этого, 
                    для успешного запуска электронной торговой площадки владельцу бизнеса требуется найти поставщиков, 
                    выбрать товарные позиции, просчитать рентабельность, уладить другие организационные вопросы вне сети.</p>
              <p>Создание интернет-магазина лучше делегировать на профессионалов. 
                Мы возьмем на себя вопросы по разработке интернет-магазина под ключ. 
                Специалисты компании предоставляют заказчику готовый продающий сайт. 
                 Он уже наполнен контентом, ориентирован на конечного потребителя и интуитивно понятен для заказчика.</p>
            </div>
          </div>
          <div className={style.item}>
            <img src="./assets/item.png" alt="" />
          </div>
        </div>
      </div>
    </Container>
  </div>;
};