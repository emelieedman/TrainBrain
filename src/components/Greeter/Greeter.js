import React from "react";
import "./greeter.css";

const Greeter = () => {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "MORNING";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "AFTERNOON";
  } else {
    timeOfDay = "NIGHT";
  }
  return (
    <h1 className="greeter-text">
      GOOD {timeOfDay} <br></br> !
    </h1>
  );
};

export default Greeter;
