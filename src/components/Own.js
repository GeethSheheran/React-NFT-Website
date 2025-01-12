import React, { useEffect, useState } from "react";
import "./Own.css";
import homeImage from "../assets/home.png"; // Import image from assets
import { motion } from "framer-motion";
import classes from "./Like.module.css";

function Own() {
  const [inView, setInView] = useState(false);

  // Detect if the section is in the viewport
  useEffect(() => {
    const checkVisibility = () => {
      const rect = document
        .querySelector(".motion-section")
        .getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setInView(true);
      } else {
        setInView(false);
      }
    };

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check visibility on load

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return (
    <div className="container">
      {/* Content Section with Border Animation */}
      <motion.div
        className="motion-section content"
        initial={{ opacity: 0, y: 50, borderColor: "#ccc" }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 50,
          borderColor: inView ? "#ff6347" : "#ccc", // Change border color when in view
        }}
        transition={{ duration: 1 }}
      >
        <h2 className={classes.title}>Why Should You Own a Phi’s NFT?</h2>
        <h3>Be part of the Story: Own Art That Shapes the Future.</h3>
        <br />
        <ul>
          <li>
            30% of proceeds support new digital street artists: Vote for the
            next generation of artists. As a Phi NFT holder, you’ll help decide
            who wins, ensuring creativity thrives.
          </li>
          <li>
            Exclusive voting rights: Only NFT holders can vote on which street
            art should be featured next, and which pieces of Phi’s work will be
            part of future collections or exhibitions.
          </li>
          <li>
            Community Lucky Draw: Enter the lucky draw with as little as $5 and
            get a chance to win from the prize pool. It’s another way we keep
            Phi's playful spirit alive—where anything is possible!
          </li>
          <li>
            Future Projects: As a Phi NFT holder, you’ll be part of exciting
            upcoming projects, including a child NFT collection tied to a P2E
            game launching next year. And the best part? You’ll receive a free
            child NFT just for holding one of Phi’s originals.
          </li>
          <li>
            Preserving Phi’s Legacy: Phi’s work is set to expand beyond NFTs. Be
            part of projects like animated versions of his characters or even a
            documentary that explores his incredible life and contribution to
            street art.
          </li>
        </ul>
      </motion.div>

      {/* Image Section with Animated Background Color and Movement */}
      <motion.div
        className="motion-section image-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 50,
        }}
        transition={{ duration: 1 }}
      >
        <img src={homeImage} alt="Home Image" />
      </motion.div>
    </div>
  );
}

export default Own;
