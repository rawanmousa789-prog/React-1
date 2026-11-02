import { Link , NavLink } from "react-router";
import "./Header.css"
import { FaMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import '../theme.css'
import {useContext } from "react";
import Data from "../context/Data";

export default function Header() {
  const {theme,changeTheme} = useContext(Data);
  return (
    
    <div>
      <header className="header">
    <h1><Link to="/">Web Dev Roadmap</Link></h1>
    <button className="theme"
    onClick={() => 
      changeTheme(theme === "light" ? "dark" : "light") }
    > {theme === "light" ? <FaMoon/>:<IoSunnyOutline/>  }
      </button>
    <ul className="flex">
      <li className="main-list">
        <NavLink className="main-link" to="/Basic">
          Basics
        </NavLink>
      </li>
      <li className="main-list">
        <NavLink className="main-link" to="/Framework">
          Frameworks
        </NavLink>
      </li>
      <li className="main-list">
        <NavLink className="main-link" to="/Tips">
          Tips
        </NavLink>
      </li>
    </ul>
  </header>
    </div>
  )
}
