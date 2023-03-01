import style from "./Prices.module.scss";
import { Container } from "../../components/Container/Container";
import { BlueButton } from "../../components/BlueButton/BlueButton";
export const Prices = () => {
  return <div className={style.prices}>
    <Container>
      <div className={style.prices_container}>
        <div className={style.taibel}>
          <div className={style.table_title}>
            <div className={style.title}>
            Итоговая стоимость разработки интернет-магазина складывается от требований заказчика 
            выясненные на этапе обсуждения. При расчёте конечной стоимости учитываются
             сложность дизайна и функционала (интеграция с 1С, подключение корпоративного портала и т.д.).
            </div>
            <div className={style.text}>Стоимость лицензии 1С Битрикс не входит в стоимость.</div>
          </div>
          <div className={style.tarif}>
            <div className={style.tarif_column}>
              <div className={style.top_column}>
                <div className={style.top_text}>
                  <div className={style.top_title}><p>Тариф</p></div>
                  <div className={style.top_variation}>Стандарт</div>
                  <div className={style.top_price}><p>от</p> 80 000 <p>₽</p></div>
                </div>
              </div>
              <hr className={style.column_hr} />
              <div className={style.bot_column}>
                <ul>
                  <li>Индивидуальный дизайн</li>
                  <li>Верстка Html, CSS, JavaScript, PHP</li>
                  <li>«Посадка» на CMS 1C Битрикс</li>
                  <li>Функционал онлайн оплаты товаров</li>
                </ul>
                <BlueButton colorBG="#43CD93">Заказать</BlueButton>
              </div>
    
            </div>
            <div className={style.tarif_column}>
              <div className={style.top_column}>
                <div className={style.top_text}>
                  <div className={style.top_title}><p>Тариф</p></div>
                  <div className={style.top_variation}>Стандарт</div>
                  <div className={style.top_price}><p>от</p> 140 000 <p>₽</p></div>
                </div>
              </div>
              <hr className={style.column_hr} />
              <div className={style.bot_column}>
                <ul>
                  <li>Индивидуальный дизайн</li>
                  <li>Верстка Html, CSS, JavaScript, PHP</li>
                  <li>«Посадка» на CMS 1C Битрикс</li>
                  <li>Функционал онлайн оплаты товаров</li>
                  <li>Личный кабинет</li>
                  <li>Расширенные фильтры с поддержкой SEO</li>
                  <li>Интеграция с системами служб доставки</li>
                  <li>Наполнение товарами</li>
                  <li>Обучение пользования сайтом</li>
                </ul>
                <BlueButton colorBG="#43CD93">Заказать</BlueButton>
              </div>
            </div>
            <div className={style.tarif_column}>
              <div className={style.top_column}>
                <div className={style.top_text}>
                  <div className={style.top_title}><p>Тариф</p></div>
                  <div className={style.top_variation}>Престиж</div>
                  <div className={style.top_price}><p>от</p> 180 000 <p>₽</p></div>
                </div>
              </div>
              <hr className={style.column_hr} />
              <div className={style.bot_column}>
                <ul>
                  <li>Индивидуальный дизайн</li>
                  <li>Верстка Html, CSS, JavaScript, PHP</li>
                  <li>«Посадка» на CMS 1C Битрикс</li>
                  <li>Функционал онлайн оплаты товаров</li>
                  <li>Личный кабинет, Сравнение, Избранное</li>
                  <li>Расширенные фильтры с поддержкой SEO</li>
                  <li>Интеграция с системами служб доставки</li>
                  <li>Наполнение товаром</li>
                  <li>Обучение пользования сайтом</li>
                  <li>Интеграция с 1С, Мой склад</li>
                  <li>Интеграция с маркетплейсами (Яндекс.Маркет, Wildberries, Goods)</li>
                  <li>Внедрение политики лояльности, купоны, бонусы</li>
                  <li>Интеграция с CRM</li>
                  <li>Любой не стандартный функционал</li>
                </ul>
                <BlueButton colorBG="#43CD93">Заказать</BlueButton>
              </div>
            </div>
          </div>
          <div className={style.bg_img}>
            <img src="./assets/price-bg.png" alt="" />
          </div>
        </div>
      </div>
    </Container>
  </div>;
};