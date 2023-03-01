import style from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { NavProps } from "../../types/nav";
export const Navbar = ({ name, path }:NavProps)=> {
  return <Link to={path}><li>{name}</li></Link>;
  
};