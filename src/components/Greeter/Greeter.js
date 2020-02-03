import React from "react";
import greeterstyle from "./greeter.module.css";

const Greeter = () => {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "MORNING";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "AFTERNOON";
  } else if (hours >= 17 && hours < 20) {
    timeOfDay = "EVENING";
  } else {
    timeOfDay = "NIGHT";
  }
  return <h1 className={greeterstyle.greeterText}>GOOD {timeOfDay}!</h1>;
};

export default Greeter;
