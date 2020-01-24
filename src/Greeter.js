import React from "react";

const Greeter = () => {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }
  return (
    <h1 className="greeter-text">
      Good {timeOfDay} <br></br> sunshine!
    </h1>
  );
};

export default Greeter;
