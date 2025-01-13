import React from "react";
import "./World.css";
import home from "../assets/home.png"; // Import your local image

const World = () => {
  return (
    /* From Uiverse.io by gharsh11032000 */
    <div className="card-container">
      <div className="card">
        <div className="img-content">
          <img src={home} alt="Home Icon" /> {/* Replace SVG with the imported image */}
        </div>
        <div className="content">
          <p className="heading">Card Hover</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipii voluptas ten mollitia
            pariatur odit, ab minus ratione adipisci accusamus vel est excepturi
            laboriosam magnam necessitatibus dignissimos molestias.
          </p>
        </div>
      </div>
    </div>
  );
};

export default World;
