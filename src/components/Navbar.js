import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import { Link } from "react-scroll"; // react-scroll for smooth scrolling
import logo from "../assets/logo.png"; // Ensure the correct path to your logo
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  const [navState, setNavState] = useState(false); // State for toggling mobile navigation

  const brandClasses = `${classes.brand} ${props.currentTheme === "light" ? classes.blur : ""}`;
  const toggleContainerClasses = `${classes["toggle-container"]} ${props.currentTheme === "light" ? classes.toggleLight : ""}`;
  const linkClasses = `${classes.links} ${props.currentTheme === "light" ? classes.light : ""}`;

  return (
    <nav className={classes.container}>
      <div className={classes["brand-container"]}>
        <div className={brandClasses}>
          <img src={logo} alt="logo" />
        </div>
        <div className={toggleContainerClasses}>
          <div className={classes.toggle}>
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavState(true)} />
            )}
          </div>
          {/* Theme toggle icon */}
          {/* <div className={classes.mode} onClick={props.changeTheme}>
            {props.currentTheme === "dark" ? (
              <ImSun className={classes.light} />
            ) : (
              <BsFillMoonFill className={classes.dark} />
            )}
          </div> */}
        </div>
      </div>
      <div className={`${classes["links-container"]} ${navState ? classes["nav-visible"] : ""}`}>
        <ul className={linkClasses}>
          <li>
            <Link to="home" smooth={true} duration={500} offset={-50}>
              Home
            </Link>
          </li>
          <li>
            <Link to="release" smooth={true} duration={500} offset={-50}>
              About
            </Link>
          </li>
          <li>
            <Link to="achive" smooth={true} duration={500} offset={-50}>
            Achieve
            </Link>
          </li> <li>
            <Link to="own" smooth={true} duration={500} offset={-50}>
              Your Phi
            </Link>
          </li>
          <li>
            <Link to="faq" smooth={true} duration={500} offset={-50}>
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
