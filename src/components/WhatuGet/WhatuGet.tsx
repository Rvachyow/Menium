import { Container } from "../Container/Container";
import style from "./WhatuGet.module.scss";
export const WhatuGet = () => {
  return <div className={style.whatuget}>
    <Container>
      <div className={style.whatuget_container}>
        <div className={style.title}>Что вы <span>получаете ?</span></div>
      </div>
    </Container>
  </div>;
};