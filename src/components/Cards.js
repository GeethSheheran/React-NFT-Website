import superEth from "../assets/supereth.png";
import classes from "./Cards.module.css";

const Card = props => {
  const cardClasses = `${classes.card} ${props.currentTheme === "light" ? classes.lightCard : ""}`;
  const cardTopClasses = `${classes["card-top"]} ${props.currentTheme === "light" ? classes.lightTop : ""}`;
  const cardDetailsClasses = `${classes["card-details"]} ${props.currentTheme === "light" ? classes.lightDetails : ""}`;
  const cardSubDetailsClasses = `${classes["card-sub-details"]} ${props.currentTheme === "light" ? classes.lightSubDetails : ""}`;
  return (
    <div className={cardClasses}>
      <div className={classes["card-image"]}>
        <img className={props.free ? classes.imgClasses : ""} src={props.image} alt="super1" />
      </div>
      <div className={classes["card-content"]}>
        <div className={classes["card-heading"]}>
          <span className={classes["card-series"]}>{props.series}</span>
          <span className={cardTopClasses}>Top bid</span>
        </div>
        <div className={cardDetailsClasses}>
          <h4 className={classes["card-title"]}>{props.title}</h4>
          <div className={classes["card-price"]}>
            <img src={superEth} alt="super eth" />
            <h4>{props.price} ETH</h4>
          </div>
        </div>
        <div className={cardSubDetailsClasses}>
          <span>#{props.tag}</span>
          <span>{props.time} day left</span>
        </div>
      </div>
    </div>
  );
}

export default Card;