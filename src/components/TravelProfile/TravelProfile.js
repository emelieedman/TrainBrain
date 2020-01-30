import React from "react";
import "./TravelProfile.css";

const TravelProfile = () => {
  return (
    <form>
      <h1 className="headline">CREATE YOUR USER PROFILE!</h1>
      <div className="input-text">
        Username:<br></br>
        <input id="username" type="text" name="username"></input>
      </div>
      <div className="input-text">
        Password:<br></br>
        <input type="password" name="psw"></input>
      </div>
      <div className="input-text">
        From:<br></br>
        <input type="text" name="from" placeholder="Malmö C"></input>
      </div>
      <div className="input-text">
        To:<br></br>
        <input type="text" name="to" placeholder="Lund C"></input>
      </div>
    </form>
  );
};

export default TravelProfile;
