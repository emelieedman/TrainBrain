import React from "react";
import "./meditation.css";

const MeditationComponent = () => {
  return (
    <div className="meditation-component">
      <img
        className="meditation-item1"
        id="mandala"
        src={require("./mandala.svg")}
        alt=""
      />
      <h2 className="meditation-item2">MEDITATION</h2>
      <div id="breath">
      <h5 className="text">BREATHE</h5>
      </div>
    </div>
  );
};

export default MeditationComponent;
