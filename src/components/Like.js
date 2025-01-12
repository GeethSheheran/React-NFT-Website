import eth1 from "../assets/eth1.png";
import eth2 from "../assets/eth2.png";
import classes from "./Like.module.css";

const Like = (props) => {
  const contentClasses = `${classes.content} ${
    props.currentTheme === "light" ? classes.lightContent : ""
  }`;
  const titleClasses = `${classes.title} ${
    props.currentTheme === "light" ? classes.lightTitle : ""
  }`;
  const descriptionClasses = `${classes.description} ${
    props.currentTheme === "light" ? classes.lightDescription : ""
  }`;
  return (
    <main className={classes.like}>
      <div className={classes.container}>
        <div className={contentClasses}>
          <div className={classes.image}>
            {/* <img src={eth1} alt="eth1" /> */}
          </div>
          <h2 className={titleClasses}>Phi’ s Whimsical World of NFTs</h2>
          <h3 className={descriptionClasses}>
          Step into the Magic: Phi ’s Imagination Reimagined in the Digital Realm.
          </h3>
          <p className={descriptionClasses}>
          Our NFT collection brings Phi’s iconic work into the digital space and allows his characters to live on in the hearts of
art lovers. Each NFT in this collection represents a piece of Phi’s world—whether it's a soaring songbird, a
mischievous mouse, or an enigmatic earthworm, these creations are a testament to his playful imagination.<br/><br/>
Beyond Phi's art, street artists worldwide will have the chance to share their collections with our community. NFT
holders can vote on the submissions, and the artist with the most votes will win an exclusive NFT from Phi's
collection, plus additional rewards.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Like;
