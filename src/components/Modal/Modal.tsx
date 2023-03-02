import  ReactDOM  from "react-dom";
import style from "./Modal.module.scss";

const portal = document.getElementById("portal");

export const Modal = ({ active, setActive }: {active:boolean, setActive:Function}) => {
  const closeModal = () => {
    setActive(false);};
  if (!active) return null;
  return ReactDOM.createPortal(    
    <div className={style.modal}>
      <div onClick={closeModal} className={style.bg}></div>
      <div className={style.modal_container}>
        <div className={style.loading}>
          <div className={style.item1}></div>
          <div className={style.item2}></div>
          <div className={style.item3}></div>
        </div>
      </div>
    </div>,
    //@ts-ignore
   portal)}