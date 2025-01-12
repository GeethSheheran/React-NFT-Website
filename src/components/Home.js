import React, { useState, useEffect } from "react";
import home from "../assets/home.png";
import classes from "./Home.module.css";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Home = (props) => {
  const [timeLeft, setTimeLeft] = useState({});
  const titleClasses = `${classes.title} ${
    props.currentTheme === "light" ? classes.lightTitle : ""
  }`;
  const descriptionClasses = `${classes.description} ${
    props.currentTheme === "light" ? classes.lightDescription : ""
  }`;

  useEffect(() => {
    // Set the countdown target date
    const targetDate = new Date("2025-01-30T00:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className={classes.home}>
      <div className={classes.container}>
        <div className={classes.content}>
          <p className={classes.short}>Street Art Awakening</p>
          <h1 className={titleClasses}>
            <Typewriter
              options={{
                strings: ["The Birds of Pamparigouste"],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
                pauseFor: 2000,
              }}
            />
          </h1>

          <div className={classes.countdown}>
            <div className={classes.timeUnit}>
              <span className={classes.timeValue}>{timeLeft.days}</span>
              <span className={classes.timeLabel}>Days</span>
            </div>
            <div className={classes.timeUnit}>
              <span className={classes.timeValue}>{timeLeft.hours}</span>
              <span className={classes.timeLabel}>Hours</span>
            </div>
            <div className={classes.timeUnit}>
              <span className={classes.timeValue}>{timeLeft.minutes}</span>
              <span className={classes.timeLabel}>Minutes</span>
            </div>
            <div className={classes.timeUnit}>
              <span className={classes.timeValue}>{timeLeft.seconds}</span>
              <span className={classes.timeLabel}>Seconds</span>
            </div>
          </div>

          <button className={classes.button}>Buy Now</button>
        </div>

        <div className={classes["image-container"]}>
          {/* Apply continuous motion to the image, including rotation and shade in/out effect */}
          <motion.div
            className={classes.image}
            initial={{ rotate: 0 }} // Initial rotation
            animate={{
              rotate: [0, 360], // Continuous 360 degree rotation
            }}
            transition={{
              duration: 5, // Duration for one complete cycle of rotation
              repeat: Infinity, // Repeat the animation indefinitely
              repeatType: "loop", // Loop the animation
              ease: "easeInOut", // Smooth easing
            }}
          >
            <img src={home} alt="home" />
          </motion.div>

          <div className={classes["ellipse-container"]}>
            <div className={`${classes.ellipse} ${classes.pink}`}></div>
            <div className={`${classes.ellipse} ${classes.orange}`}></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
