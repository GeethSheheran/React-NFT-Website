import signup from "../assets/signup.png";
import classes from "./Signup.module.css";

const Signup = props => {
  const titleClasses = `${classes.title} ${props.currentTheme === "light" ? classes.lightTitle : ""}`;
  const descriptionClasses = `${classes.description} ${props.currentTheme === "light" ? classes.lightDescription : ""}`;
  const btnClasses = `${classes.button} ${props.currentTheme === "light" ? classes.lightBtn : ""}`;
  return (
    <main className={classes.signup}>
      <div className={classes.container}>
        <div className={classes.content}>
          <p className={classes["sub-title"]}>Launching Soon</p>
          <h1 className={titleClasses}>An NFT like no other</h1>
          <p className={descriptionClasses}>Don't miss out on the release of our new NFT. Sign up below to recieve updates when we go live.</p>
          <button className={btnClasses}>Sign Up</button>
        </div>
        <div className={classes["image-container"]}>
          <div className={classes.image}>
            <img src={signup} alt="home" />
          </div>
          <div className={classes["ellipse-container"]}>
            <div className={`${classes.ellipse} ${classes.pink}`}></div>
            <div className={`${classes.ellipse} ${classes.orange}`}></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Signup;