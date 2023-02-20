import style from "./InternetShop.module.scss";
import { Container } from "../Container/Container";
import { BlueButton } from "../BlueButton/BlueButton";
export const InternetShop = () => {
  return <div className={style.internetshop}>
    <Container>
      <div className={style.container_iternetshop}>
        <div className={style.title}>Мы создаем интернет-магазины, <span>которые продают</span></div>
        <div className={style.block_box}>
          <div className={style.box}>
            <div className={style.block_number}><p>01</p></div>
            <div className={style.block_title}>Удобный интерфейс</div>
            <div className={style.block_line}></div>
            <div className={style.block_text}>Блоковая подача информации, удобные кнопки,<br /> карточки товаров, 
            понятное меню и легкая навигация по многостраничному сайту.</div>
          </div>
          <div className={style.box}>
            <div className={style.block_number}><p>02</p></div>
            <div className={style.block_title}>Продающая структура</div>
            <div className={style.block_line}></div>
            <div className={style.block_text}>Делаем анализ вашей целевой аудитории и <br /> вашего предложения. 
            Опираясь на анализ прописываем продающуюу структуру сайта.</div>
          </div>
          <div className={style.box}>
            <div className={style.block_number}><p>03</p></div>
            <div className={style.block_title}>Адаптивность</div>
            <div className={style.block_line}></div>
            <div className={style.block_text}>Сайт корректно отображается на различных <br /> устройствах, 
            элементы динамически подстраиваются под различные разрешения экрана,
             что повышает конверсию сайта в покупку.</div>
          </div>
          <div className={style.box}>
            <div className={style.block_number}><p>04</p></div>
            <div className={style.block_title}>Уникальный дизайн</div>
            <div className={style.block_line}></div>
            <div className={style.block_text}>Не пользуемся шаблонными решениями. 
            Под <br /> каждый проект разрабатывается индивидуальный дизайн который подчеркнет имидж компании</div>
          </div>
          <div className={style.box}>
            <div className={style.block_number}><p>05</p></div>
            <div className={style.block_title}>Защита и безопасность</div>
            <div className={style.block_line}></div>
            <div className={style.block_text}>Подключаем HTPS протокол, 
            защиту от DDOS атак, <br /> чтобы данные клиентов были в безопасности.</div>
          </div>
          <div className={style.box}>
            <div className={style.block_number}><p>06</p></div>
            <div className={style.block_title}>SEO оптимизация</div>
            <div className={style.block_line}></div>
            <div className={style.block_text}>Сайты соответствуют требованиям поисковой <br /> оптимизации, 
            они без труда покоряют топы поисковой выдачи Яндекс и Google.</div>
          </div>
        </div>
        <div className={style.btn_internetshop}>
          <BlueButton size="0px 78px">Узнать стоимость</BlueButton>
        </div>
      </div>
    </Container>
  </div>;
};