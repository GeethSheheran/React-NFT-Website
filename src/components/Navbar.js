import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import classes from "./Navbar.module.css";

const NavBar = props => {
  const [navState, setNavState] = useState(false);

  const brandClasses = `${classes.brand} ${props.currentTheme === "light" ? classes.blur : ""}`;
  const linkClasses = `${classes.links} ${props.currentTheme === "light" ? classes.light : ""}`;
  const toggleContainerClasses = `${classes["toggle-container"]} ${props.currentTheme === "light" ? classes.toggleLight : ""}`;

  return (
    <nav className={classes.container}>
      <div className={classes["brand-container"]}>
        <div className={brandClasses}>
          <img src={logo} alt="logo" />
        </div>
        <div className={toggleContainerClasses}>
          <div className={classes.toggle}>
            {navState ? <MdClose onClick={() => setNavState(false)} /> : <GiHamburgerMenu onClick={() => setNavState(true)} />}
          </div>
          <div className={classes.mode} onClick={props.changeTheme}>
            {props.currentTheme === "dark" ? <ImSun className={classes.light} /> : <BsFillMoonFill className={classes.dark} />}
          </div>
        </div>
      </div>
      <div className={`${classes["links-container"]} ${navState ? classes["nav-visible"] : ""}`}>
        <ul className={linkClasses}>
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
            {props.currentTheme === "dark" ? <ImSun className={classes.light} /> : <BsFillMoonFill className={classes.dark} />}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;