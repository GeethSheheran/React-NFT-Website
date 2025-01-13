import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  const [navState, setNavState] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const brandClasses = `${classes.brand} ${props.currentTheme === "light" ? classes.blur : ""}`;
  const toggleContainerClasses = `${classes["toggle-container"]} ${props.currentTheme === "light" ? classes.toggleLight : ""}`;
  const linkClasses = `${classes.links} ${props.currentTheme === "light" ? classes.light : ""}`;
  const containerClasses = `${classes.container} ${scrolled ? classes.scrolled : ""}`;

  return (
    <nav className={containerClasses}>
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
    </div>
  </div>

  {/* Links Container */}
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
      </li>
      <li>
        <Link to="own" smooth={true} duration={500} offset={-50}>
          Your Phi
        </Link>
      </li>
      <li>
        <Link to="faq" smooth={true} duration={500} offset={-50}>
          FAQ
        </Link>
      </li>

      {/* Social Media Links in Hamburger Menu */}
      <li className={classes.socialMediaLinks}>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <BsFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <BsTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noreferrer">
          <FaTiktok />
        </a>
      </li>
      <li>
        <button>Connect</button>
      </li>
    </ul>
  </div>
</nav>

  );
};

export default Navbar;
