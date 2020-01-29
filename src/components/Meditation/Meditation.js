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
      <p className="meditation-item3" id="meditation-instruction">
        <div id="breath"></div>
      </p>
    </div>
  );
};

export default MeditationComponent;
