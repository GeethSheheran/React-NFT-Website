import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import logo from "../assets/logo.png";

// Import local images
import img1 from "../assets/480.png";
import img2 from "../assets/481.png";
import img3 from "../assets/482.png";
import img4 from "../assets/483.png";
import img5 from "../assets/484.png";
import img6 from "../assets/485.png";
import img7 from "../assets/486.png";
import img8 from "../assets/487.png";
import img9 from "../assets/488.png";
import img10 from "../assets/489.png";
import img11 from "../assets/490.png";
import img12 from "../assets/1000.png";
import img13 from "../assets/1001.png";
import img14 from "../assets/1002.png";
import img15 from "../assets/1003.png";
import img16 from "../assets/1004.png";
import img17 from "../assets/1005.png";
import img18 from "../assets/1006.png";

import "./What.css";

export default function What() {
  return (
    <div className="container">
      {/* Left column: ImageList */}
      <div className="image-list-column">
        <ImageList sx={{ width: 500, height: 750 }} variant="woven" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>

      {/* Right column: Logo, heading, and grid */}
      <div className="right-column">
        <h1>What We Aim to Achieve?</h1>
        <h3>Preserving Creativity, Inspiring Generations: A Movement for Art and Artists.</h3>
        <p>At the core of this project is a mission to preserve and celebrate street art through the digital world. By combining
Phi’s timeless artwork with a platform for emerging street artists, we aim to create a thriving community of art
enthusiasts who appreciate creativity and imagination.</p>
<h3>Our goals include:</h3>
<ul>
  <li>Honoring the Legacy of Phi: Keep the spirit of Phi alive through NFTs that represent his playful characters like
  birds, cats, mice, and earthworms from his imaginary world of Pamparigouste.</li>
  <li>Supporting Street Artists Globally: Provide a platform for emerging street artists to showcase their work, vote on
  their submissions, and reward the best with NFTs from Phi’s collection.</li>
  <li>Building a Vibrant Community: Engage art lovers in a collaborative, creative community where NFT holders can
  vote on street art, participate in exclusive events, and influence the direction of future projects.</li>
</ul>
<p>Join us in preserving street art’s vibrant culture and become part of a creative movement that bridges the physical
and digital worlds.</p>
      </div>
    </div>
  );
}

// Image data array
const itemData = [
  { img: img1, title: "NFT" },
  { img: img2, title: "NFT" },
  { img: img3, title: "NFT" },
  { img: img4, title: "NFT" },
  { img: img5, title: "NFT" },
  { img: img6, title: "NFT" },
  { img: img7, title: "NFT" },
  { img: img8, title: "NFT" },
  { img: img9, title: "NFT" },
  { img: img10, title: "NFT" },
  { img: img11, title: "NFT" },
  { img: img12, title: "NFT" },
  { img: img13, title: "NFT" },
  { img: img14, title: "NFT" },
  { img: img15, title: "NFT" },
  { img: img16, title: "NFT" },
  { img: img17, title: "NFT" },
  { img: img18, title: "NFT" },
];
