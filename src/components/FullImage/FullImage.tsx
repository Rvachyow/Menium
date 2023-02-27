import style from "./FullImage.module.scss";
export const FullImage = () => {
  return <div className={style.fullimage}>
    <div className={style.img}>
        <img src="../assets/imgfull.png" alt="" />
    </div>
</div>;
};