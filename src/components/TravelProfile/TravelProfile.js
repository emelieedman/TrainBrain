import React from "react";
import searchTrip from "./TravelProfile.module.css";
import Greeter from "../Greeter/Greeter";

const TravelProfile = () => {
  return (
    <form className={searchTrip.main}>
      <div className={searchTrip.greeter}>
        <Greeter />
      </div>
      <div className={searchTrip.inputText}>
        From:<br></br>
        <input type="text" name="from" placeholder="Lund C"></input>
      </div>
      <div className={searchTrip.inputText}>
        To:<br></br>
        <input type="text" name="to" placeholder="Malmö C"></input>
      </div>
    </form>
  );
};

export default TravelProfile;
