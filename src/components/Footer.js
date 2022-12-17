import logo from "../assets/logo.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import classes from "./Footer.module.css";

const links = [
  {
    title: "About",
    data: ["About", "Terms", "Legal"],
  },
  {
    title: "NFT",
    data: ["OpenSea", "Maker", "Learn"],
  },
  {
    title: "Contact",
    data: ["Press", "Support"],
  },
  {
    title: "Social",
    data: ["Twiiter", "Instagram"],
  },
];

const socialLink = [
  <BsFacebook />,
  <BsTwitter />,
  <BsInstagram />,
  <FaTiktok />,
];

const Footer = props => {
  const upperClasses = `${classes.upper} ${props.currentTheme === "light" ? classes.lightUpper : ""}`;
  const lowerClasses = `${classes.lower} ${props.currentTheme === "light" ? classes.lightLower : ""}`;
  const linkClasses = `${classes.link} ${props.currentTheme === "light" ? classes.lightLink : ""}`;
  return (
    <footer className={classes.footer}>
      <div className={upperClasses}>
        <div className={classes["brand-container"]}>
          <div className={classes.brand}>
            <img className={props.currentTheme === "light" ? classes.img : ""} src={logo} alt="logo" />
          </div>
          <p>Exclusive NFT Collection</p>
          <ul>
            {socialLink.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <div className={classes.links}>
          {links.map(({ title, data }, index) => {
            return (
              <div className={linkClasses} key={index}>
                <h4>{title}</h4>
                <ul>
                  {data.map((link, index2) => (
                    <li key={index2}>{link}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className={lowerClasses}>
        <span>&copy; Copyright 2022 NFT</span>
        <span>Launching August 2024</span>
      </div>
    </footer>
  );
}

export default Footer;