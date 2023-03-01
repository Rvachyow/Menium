import { NavProps } from "../../../types/nav";
import { Link } from "react-router-dom";
export const ItemMenu = ({ name, path, handleActive }:NavProps&{handleActive:React.MouseEventHandler<HTMLAnchorElement>}) => {
  return <Link onClick={handleActive} to={path}><li>{name}</li></Link>;
};