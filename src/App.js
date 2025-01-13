import { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Free from "./components/Free";
import Home from "./components/Home";
import Like from "./components/Like";
import NavBar from "./components/Navbar";
import Release from "./components/Release";
import ScrollToTop from "./components/ScrollToTop";
import Signup from "./components/Signup";
import SuperRare from "./components/SuperRare";
import classes from "./App.module.css";
import Own from "./components/Own";
import Roadmap from "./components/Roadmap";
import World from "./components/World";
import What from "./components/What";
import FAQSection from "./components/FAQSection";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false
    });
    sr.reveal(`nav, main, footer`, { interval: 500 });
  }, []);

  const appClasses = `${classes["app-container"]} ${theme === "light" ? classes.light : ""}`;

  return (
    <div className={appClasses}>
      <ScrollToTop currentTheme={theme} />
      <NavBar changeTheme={changeTheme} currentTheme={theme} />
      <div id="home"><Home currentTheme={theme} /></div>
      <div id="release"><Release currentTheme={theme} /></div>
      <div id="achive"><What currentTheme={theme} /></div>
      {/* <div id="superrare"><SuperRare currentTheme={theme} /></div> */}
      <div id="clients"><Clients /></div>
      {/* <div id="like"><Like currentTheme={theme} /></div> */}
      {/* <div id="own"><Own currentTheme={theme} /></div> */}
      <div  id="own"><World currentTheme={theme}/></div>
      <div id="roadmap"><Roadmap currentTheme={theme} /></div>
      <div id="faq"><FAQSection currentTheme={theme} /></div>
      <div id="footer"><Footer currentTheme={theme} /></div>
    </div>
  );
}

export default App;
