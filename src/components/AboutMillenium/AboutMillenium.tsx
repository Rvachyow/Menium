import style from "./AboutMillenium.module.scss";
import { Container } from "../Container/Container";
import { BlueButton } from "../BlueButton/BlueButton";
import { CheckBox } from "../CheckBox/CheckBox";
export const AboutMillenium = () => {
  return <div className={style.aboutmillenioum}>
    <Container>
      <div className={style.about_container}>
        <div className={style.about_items}>
          <div className={style.text_about}>
            <div className={style.title}>
            Компания <br/> Millenium-
            </div>
            <div className={style.text}>
              <p>Это дорогая и долгая разработка интернет-магазинов на 1С Битрикс! 
                    Нельзя сделать качественный цифровой продукт за дешево и быстро!</p>
              <p>Мы создадим интернет-магазин с нуля. Заказчику не придется искать 
                    других IT-<br/>специалистов для дальнейшей настройки и запуска сайта. 
                    Мы настроим сервисы, интегрируем модули для онлайн-торговли, добавим контент и товары. 
                    Работы по созданию интернет-магазина с нуля ведутся только после анализа ниши бизнеса.</p>
            </div>
          </div>
          <div className={style.table_about}>
            <div className={style.item_table}>
              <div className={style.table_title}>
              Звоните нам по телефону <br />+7 (495) 792-66-69
              </div>
              <div className={style.table_text}>
              или закажите обратный звонок чтобы получить ответы <br /> на все интересующие вас вопросы.
              </div>
              <div className={style.text_input}>
                <div>
                  <input className={style.input_about} placeholder="Введите ваше имя" type="text" />
                  <div className={style.lain}></div>
                </div>
                <div>
                  <input className={style.input_about} placeholder="+ 7 (999) 999 99 99" type="text" />
                  <div className={style.lain}>
                  </div></div>
              </div>
              <BlueButton colorBG="white" color="#6B5AF9">Перезвоните мне</BlueButton>
              <div className={style.checkbox}>
                <CheckBox></CheckBox>
                <p>Cогласен/а на обработку персональных данных</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>;
};