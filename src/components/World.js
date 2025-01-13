import React from "react";
import "./World.css";
import home from "../assets/home.png"; // Import your local image

const World = () => {
  return (
    /* From Uiverse.io by mirbasit01 */
    <div class="card ">
      <div class="main-content container1">
        <h1 className="header">Phi’ s Whimsical World of NFTs</h1>
        <h3>
          Step into the Magic: Phi ’s Imagination Reimagined in the Digital
          Realm.
        </h3>
        <p className="text">
          Our NFT collection brings Phi’s iconic work into the digital space and
          allows his characters to live on in the hearts of art lovers. Each NFT
          in this collection represents a piece of Phi’s world—whether it's a
          soaring songbird, a mischievous mouse, or an enigmatic earthworm,
          these creations are a testament to his playful imagination.
          <br />
          <br />
          Beyond Phi's art, street artists worldwide will have the chance to
          share their collections with our community. NFT holders can vote on
          the submissions, and the artist with the most votes will win an
          exclusive NFT from Phi's collection, plus additional rewards.
        </p>
      </div>
    </div>
  );
};

export default World;
