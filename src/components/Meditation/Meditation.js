import React from "react";
import meditationstyle from "./meditation.module.css";

const MeditationComponent = () => {
  return (
    <div className={meditationstyle.meditationComponent}>
      <img
        className={meditationstyle.meditationItem1}
        id={meditationstyle.mandala}
        src={require("../../assets/mandala.svg")}
        alt="mandala"
      />
      <h2 className={meditationstyle.meditationItem2}>MEDITATION</h2>
      <div id={meditationstyle.breath}>
        <h5 className={meditationstyle.meditationText}>BREATHE</h5>
      </div>
    </div>
  );
};

export default MeditationComponent;
