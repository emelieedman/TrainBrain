import React from "react";
import searchTrip from "./TravelProfile.module.css";

const TravelProfile = () => {
  return (
    <form>
      <h1 className={searchTrip.headline}>CREATE YOUR USER PROFILE!</h1>
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
