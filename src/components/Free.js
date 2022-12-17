import Card from "./Cards";
import icon from "../assets/icon.png";
import super1 from "../assets/super1.png";
import release2 from "../assets/release2.png";
import classes from "./Free.module.css";

const Free = props => {
  return (
    <div className={classes.free}>
      <div className={classes.container}>
        <div className={classes.background}>
          <div className={`${classes.ellipse} ${classes.pink}`}></div>
          <div className={`${classes.ellipse} ${classes.green}`}></div>
        </div>
        <div className={classes.content}>
          <div className={classes.image}>
            <img src={icon} alt="icon" />
          </div>
          <h2 className={classes.title}>Free NFT for early birds</h2>
          <p className={classes.description}>Sign up today and you'll get a free NFT when we launch</p>
        </div>
      </div>
      <div className={classes.cards}>
        <div className={classes.card1}>
          <Card image={super1} series="Gloop Series" title="Purple Man" price={2.99} tag={12983} time={1} currentTheme={props.currentTheme} free={true}/>
        </div>
        <div className={classes.card2}>
          <Card image={release2} series="Gloop Series" title="Purple Man" price={3.95} tag="1094" time={2} currentTheme={props.currentTheme} free={true}/>
        </div>
      </div>
    </div>
  );
}

export default Free;