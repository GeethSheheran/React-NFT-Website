import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/release1.png";
import release2 from "../assets/release2.png";
import Card from "./Cards";
import classes from "./Release.module.css";

const Release = () => {
  return (
    <div className={classes.releases}>
      <div className={`${classes.release} ${classes.orange}`}>
        <div className={classes.content}>
          <h2 className={classes.title}>Initial Release 4/11</h2>
          <p className={classes.description}>We have released four limited edition NFTs early which can be bid on via <a href="#features">OpenSea</a></p>
          <p className={classes.description}>There will be the only four of these NFTs we ever make, so be sure not to miss out!</p>
          <p className={classes.description}>50% of proceeds go to charity.</p>
          <a href="#features" className={classes.link}>Check them out <BsArrowRight /></a>
        </div>
        <div className={classes.image}>
          <img src={release1} alt="release" />
          <div className={`${classes.ellipse} ${classes.pink}`}></div>
        </div>
      </div>
      <div className={`${classes.release} ${classes.green}`}>
        <div className={classes["card-container"]}>
          <Card
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
          <div className={`${classes.ellipse} ${classes.orange}`}></div>
        </div>
        <div className={classes.content}>
          <h2 className={classes.title}>Initial Release 4/11</h2>
          <p className={classes.description}>
            We have released four limited edition NFTs early which can be bid on
            via <a href="#features">OpenSea</a>
          </p>
          <p className={classes.description}>
            There will be the only four of these NFTs we ever make, so be sure
            not to miss out!
          </p>
          <p className={classes.description}>50% of proceeds go to charity.</p>
          <a href="#features" className={classes.link}>
            Check them out <BsArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Release;