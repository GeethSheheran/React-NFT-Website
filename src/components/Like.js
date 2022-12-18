import eth1 from "../assets/eth1.png";
import eth2 from "../assets/eth2.png";
import classes from "./Like.module.css";

const Like = props => {
  const contentClasses = `${classes.content} ${props.currentTheme === "light" ? classes.lightContent : ""}`;
  const titleClasses = `${classes.title} ${props.currentTheme === "light" ? classes.lightTitle : ""}`;
  const descriptionClasses = `${classes.description} ${props.currentTheme === "light" ? classes.lightDescription : ""}`;
  return (
    <main className={classes.like}>
      <div className={classes.container}>
        <div className={contentClasses}>
          <div className={classes.image}>
            <img src={eth1} alt="eth1" />
          </div>
          <h2 className={titleClasses}>An NFT like no other</h2>
          <p className={descriptionClasses}>Don't miss out on the release of our new NFT. Sign up below to recieve updates when we go live on 11/22.</p>
          <p className={descriptionClasses}>Don't miss out on the release of our new NFT. Sign up below to recieve updates when we go live on 11/22. Don't miss out on the release of our new NFT.</p>
        </div>
        <div className={contentClasses}>
          <div className={classes.image}>
            <img src={eth2} alt="eth2" />
          </div>
          <h2 className={titleClasses}>An NFT like no other</h2>
          <p className={descriptionClasses}>Don't miss out on the release of our new NFT. Sign up below to recieve updates when we go live on 11/22.</p>
          <p className={descriptionClasses}>Don't miss out on the release of our new NFT. Sign up below to recieve updates when we go live on 11/22. Don't miss out on the release of our new NFT.</p>
        </div>
      </div>
    </main>
  );
}

export default Like;