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
        BREATH IN 4 <br></br>HOLD<br></br>BREATH OUT 4<br></br>HOLD
      </p>
    </div>
  );
};

export default MeditationComponent;
