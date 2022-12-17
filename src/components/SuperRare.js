import Card from "./Cards";
import super1 from "../assets/super1.png";
import super2 from "../assets/super2.png";
import super3 from "../assets/super3.png";
import super4 from "../assets/super4.png";
import classes from "./SuperRare.module.css";

const data = [
  {
    image: super1,
    series: "Gloop Series",
    title: "Purple Man",
    price: 2.99,
    tag: 12983,
    time: 1,
  },
  {
    image: super2,
    series: "Gloop Series",
    title: "Beige",
    price: 2.99,
    tag: 12983,
    time: 1,
  },
  {
    image: super3,
    series: "Gloop Series",
    title: "Red Man",
    price: 2.99,
    tag: 12983,
    time: 1,
  },
  {
    image: super4,
    series: "Gloop Series",
    title: "Green",
    price: 2.99,
    tag: 12983,
    time: 1,
  },
];

const SuperRare = props => {
  const titleClasses = `${classes.title} ${props.currentTheme === "light" ? classes.lightTitle : ""}`;
  const descriptionClasses = `${classes.description} ${props.currentTheme === "light" ? classes.lightDescription : ""}`;
  return (
    <div className={classes["super-rare"]}>
      <div className={classes["title-container"]}>
        <h2 className={titleClasses}>LE Super Rare Auction</h2>
        <p className={descriptionClasses}>We have released four limited edition NFT's early which which can be bid on via <a href="#features">OpenSea</a>.</p>
      </div>
      <div className={classes.cards}>
        {data.map(({ image, series, title, price, tag, time }, index) => (
          <Card image={image} series={series} title={title} price={price} tag={tag} time={time} key={index} currentTheme={props.currentTheme}/>
        ))}
      </div>
    </div>
  );
}

export default SuperRare;