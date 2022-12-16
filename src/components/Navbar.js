import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import classes from "./Navbar.module.css";

const NavBar = props => {
  const [navState, setNavState] = useState(false);
  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>
        <div className="toggle-container">
          <div className="toggle">
            {navState ? <MdClose onClick={() => setNavState(false)} /> : <GiHamburgerMenu onClick={() => setNavState(true)} />}
          </div>
          <div className="mode" onClick={props.changeTheme}>
            {props.currentTheme === "dark" ? <ImSun className="light" /> : <BsFillMoonFill className="dark" />}
          </div>
        </div>
      </div>
      <div className={`links-container ${navState ? "nav-visible" : ""}`}>
        <ul className="links">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#launch">Launch</a>
          </li>
          <li>
            <a href="#signup">Sign Up</a>
          </li>
          <li onClick={props.changeTheme}>
            {props.currentTheme === "dark" ? <ImSun className="light" /> : <BsFillMoonFill className="dark" />}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;