import signup from "../assets/home.png";
import classes from "./Signup.module.css";

const Signup = (props) => {
  const titleClasses = `${classes.title} ${
    props.currentTheme === "light" ? classes.lightTitle : ""
  }`;
  const descriptionClasses = `${classes.description} ${
    props.currentTheme === "light" ? classes.lightDescription : ""
  }`;
  const btnClasses = `${classes.button} ${
    props.currentTheme === "light" ? classes.lightBtn : ""
  }`;
 
  return (
    <main className={classes.signup}>
      <div className={classes.container}>

      <div className={classes["image-container"]}>
          {/* <div className={classes.image}>
            <img src={signup} alt="home" />
          </div> */}
          <h1 className={titleClasses}>What We Aim to Achieve?</h1>

          <div className={classes["ellipse-container"]}>
          </div>
        </div>
        <div className={classes.content}>
          <h3>
            Preserving Creativity, Inspiring Generations: A Movement for Art and Artists.
          </h3>
          <p className={descriptionClasses}>
            At the core of this project is a mission to preserve and celebrate
            street art through the digital world. By combining Phi’s timeless
            artwork with a platform for emerging street artists, we aim to
            create a thriving community of art enthusiasts who appreciate
            creativity and imagination.
          </p>
          <h3>Our goals include:</h3>
          <ul>
            <li>
              Honoring the Legacy of Phi: Keep the spirit of Phi alive through
              NFTs that represent his playful characters like birds, cats, mice,
              and earthworms from his imaginary world of Pamparigouste.
            </li>
            <li>
              Supporting Street Artists Globally: Provide a platform for
              emerging street artists to showcase their work, vote on their
              submissions, and reward the best with NFTs from Phi’s collection.
            </li>
            <li>
              Building a Vibrant Community: Engage art lovers in a
              collaborative, creative community where NFT holders can vote on
              street art, participate in exclusive events, and influence the
              direction of future projects.
            </li>
          </ul>
          <p className={descriptionClasses}>
            Join us in preserving street art’s vibrant culture and become part
            of a creative movement that bridges the physical and digital worlds.
          </p>
          {/* <button className={btnClasses}>Sign Up</button> */}
        </div>
      </div>
    </main>
  );
};

export default Signup;
