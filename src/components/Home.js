import home from "../assets/home.png";
import classes from "./Home.module.css";

const Home = props => {
  const titleClasses = `${classes.title} ${props.currentTheme === "light" ? classes.lightTitle : ""}`;
  const descriptionClasses = `${classes.description} ${props.currentTheme === "light" ? classes.lightDescription : ""}`;
  const btnClasses = `${classes.button} ${props.currentTheme === "light" ? classes.lightBtn : ""}`
  return (
    <div className={classes.home}>
      <div className={classes.container}>
        <div className={classes.content}>
          <p className={classes["sub-title"]}>Launching Soon</p>
          <h1 className={titleClasses}>An NFT like no other</h1>
          <p className={descriptionClasses}>Don't miss out on the release of our new NFT. Sign up below to recieve updates when we go live.</p>
          <button className={btnClasses}>Sign Up</button>
        </div>
        <div className={classes["image-container"]}>
          <div className={classes.image}>
            <img src={home} alt="home" />
          </div>
          <div className={classes["ellipse-container"]}>
            <div className={`${classes.ellipse} ${classes.pink}`}></div>
            <div className={`${classes.ellipse} ${classes.orange}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;