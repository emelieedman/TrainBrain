import "./meditation.css";
import React, { useState } from "react";

const MeditationComponent = () => {
  const [animation, setAnimation] = useState(false);

  function toggleButton() {
    setAnimation(!animation);
  }

  return (
    <div
      className={
        !animation
          ? "meditation-component reverse-animation"
          : " meditation-component is-animated"
      }
      onClick={() => toggleButton()}
    >
      <img
        className="meditation-item1"
        id="mandala"
        src={require("../../assets/mandala.svg")}
        alt="mandala"
      />
      <h2 className="meditation-item2">MEDITATION</h2>
      <div id="breath">
        <img src={require("../../assets/pinkbutterfly32-min.gif")} alt="gif" className="meditation-animation"/>
      </div>
    </div>
  );
};

export default MeditationComponent;
