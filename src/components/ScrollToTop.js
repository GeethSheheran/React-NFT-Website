import { useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import classes from "./ScrollToTop.module.css";

const ScrollToTop = props => {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });
  const scrollToTopClasses = `${classes.scrollToTop} ${props.currentTheme === "light" ? classes.light : ""}`;
  return (
    <div className={`${scrollToTopClasses} ${visible ? classes.visible : ""}`}>
      <a href="#">
        <BsChevronUp />
      </a>
    </div>
  );
}

export default ScrollToTop;