import { Container } from "../../components/Container/Container";
import style from "./Contacts.module.scss";
import { YaMap } from "../../components/YaMap/YaMap";
export const Contacts = () => {
  return <div className={style.contacts}>
    <Container>
      <div className={style.contatcts_container}>
        <div className={style.title}><h3>Контактная <span>информация</span></h3></div>
        <div className={style.body}>
          <div className={style.text}>
            <div className={style.nubmer}>
              <p>+ 7 (495) 555 65 65</p>
              <img src="./assets/sTel.png" alt="" />
              <img src="./assets/sWat.png" alt="" />
            </div>
            <p>info@millenium.ru</p>
            <div>Москва, ул. Профсоюзная 76, <br /> БЦ «ГАЛЕРЕЯ 76» 2 этаж</div>
          </div>
          <div className={style.map}>
            <YaMap></YaMap>
          </div>
        </div>
      </div>
    </Container>
  </div>;
};