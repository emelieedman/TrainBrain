import React from "react";

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
      GOOD {timeOfDay} <br></br> SUNSHINE!
    </h1>
  );
};

export default Greeter;
