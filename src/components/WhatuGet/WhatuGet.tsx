import { Container } from "../Container/Container";
import style from "./WhatuGet.module.scss";
import { BlueButton } from "../BlueButton/BlueButton";
export const WhatuGet = () => {
  return <div className={style.whatuget}>
    <Container>
      <div className={style.whatuget_container}>
        <div className={style.title}>Что вы <span>получаете ?</span></div>
        <div className={style.what_box}>
          <div className={style.box}>
            <div className={style.items}>
              <img src="./assets/img1.png" alt="" />
            </div>
            <div className={style.items}>
              <div className={style.box_title}>Каталог товаров</div>
              <ul>
                <li>возможность выгружать свои товары в неограниченном количестве</li>
                <li>добавлять и редактировать описание товаров</li>
                <li>сортировать товары по заданным критериям</li>
                <li>моментальная оплата товара или оформление при помощи добавления корзины</li>
              </ul>
            </div>
          </div>
          <div className={style.box}>
            <div className={style.items}>
              <div className={style.box_title}>Оформление заказа</div>
              <ul>
                <li>личный кабинет</li>
                <li>корзина с отображением выбранных товаров</li>
                <li>оформление заказа с указанием контактных данных</li>
                <li>возможность приема онлайн-платежей</li>
                <li>использование купонов, скидок и специальных предложений</li>
              </ul>
            </div>
            <div className={style.items}>
              <img src="./assets/img2.png" alt="" />
            </div>
          </div>
          <div className={style.box}>
            <div className={style.items}>
              <img src="./assets/img3.png" alt="" />
            </div>
            <div className={style.items}>
              <div className={style.box_title}>Интеграции</div>
              <ul>
                <li>1С, Мой   (выгрузка товаров на сайт, полная синхронизация)</li>
                <li>Маркетплейсы (Яндекс.Маркет, Wildberries, Goods, Ozon)</li>
                <li>Интеграция со службами доставки СДЭК, Почта России</li>
              </ul>
            </div>
          </div>
          <div className={style.box}>
            <div className={style.items}>
              <div className={style.box_title}>CRM</div>
              <ul>
                <li>фиксация и отслеживание поступивших заявок</li>
                <li>уведомления о заказах</li>
                <li>отчетность магазина</li>
              </ul>
            </div>
            <div className={style.items}>
              <img src="./assets/img4.png" alt="" />
            </div>
          </div>
        </div>
        <div className={style.btn}><BlueButton size="0px 78px">Узнать стоимость</BlueButton></div>
      </div>
    </Container>
  </div>;
};