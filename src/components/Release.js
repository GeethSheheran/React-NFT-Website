import React, { useState, useEffect } from "react";
import release1 from "../assets/slide1.png";
import release2 from "../assets/slide2.png"; 
import release3 from "../assets/slide3.png"; 
import release4 from "../assets/slide4.png"; 
import release5 from "../assets/slide5.png"; 
import release6 from "../assets/slide6.png"; 
import release7 from "../assets/slide7.png"; 
import classes from "./Release.module.css";

const Release = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [release1, release2, release3, release4, release5, release6, release7];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 300); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval when the component unmounts
  }, []);

  return (
    <main className={classes.releases}>
      <div className={`${classes.release} ${classes.orange}`}>
        <div className={classes.content}>
          <h2 className={classes.title}>
            Who Was Phi?
          </h2>
          <h4 className={classes.title2}>
            Where Urban Legends Become Eternal: Phi's Legacy Lives On
          </h4>
          <p className={classes.description}>
            Phi (1966–2012) was a visionary French street artist known for his
            vibrant and whimsical creations that transformed urban spaces across
            cities like Toulon, Marseille, and Paris. His art often featured
            playful characters—soaring songbirds, mischievous mice, enigmatic
            earthworms, and carefree cats—all part of his imaginary world,
            Pamparigouste. With his unique blend of humor, creativity, and
            imagination, Phi brought joy and wonder to city streets, turning
            everyday urban landscapes into magical realms.
          </p>
          <p className={classes.description}>
            A true pioneer of street art, Phi had a gift for creating characters
            that resonated with people of all ages. His work wasn’t just about
            the visual impact—it was about storytelling, building worlds within
            walls, and inviting passersby to step into his dreamlike vision. His
            art became a hallmark of spontaneity and imagination, offering a
            whimsical escape from the everyday grind.
          </p>
          <p className={classes.description}>
            Though Phi passed away in 2012, his artistic legacy lives on through
            this NFT project. We aim to preserve and celebrate his work by
            bringing it into the digital age, ensuring that his playful
            imagination and spirit of creativity continue to inspire generations
            to come.
          </p>
        </div>
        <div className={classes.image}>
          <img src={images[currentImage]} alt="release" />
          <div className={`${classes.ellipse} ${classes.pink}`}></div>
        </div>
      </div>
    </main>
  );
};

export default Release;
