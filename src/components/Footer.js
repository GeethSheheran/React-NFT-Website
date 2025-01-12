import { Link } from "react-scroll";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import classes from "./Footer.module.css";

const socialLink = [
  <BsFacebook key="facebook" />,
  <BsTwitter key="twitter" />,
  <BsInstagram key="instagram" />,
  <FaTiktok key="tiktok" />,
];

const Footer = props => {
  const lowerClasses = `${classes.lower} ${props.currentTheme === "light" ? classes.lightLower : ""}`;

  return (
    <footer className={classes.footer}>
      {/* Social Media Links */}
      <div className={classes.socialLinks}>
        <ul>
          {socialLink.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </div>

      {/* Navigation Links */}
      <nav className={classes.navLinks}>
        <ul>
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
        </ul>
      </nav>

      {/* Footer Text */}
      <div className={lowerClasses}>
        <span>&copy; Copyright 2025 NFT</span>
        <span>Launching August 2025</span>
      </div>
    </footer>
  );
};

export default Footer;
