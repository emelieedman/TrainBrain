import React from "react";

function HardCodeTrainInfo () {
    return (
    <div className = "info-component">
        <img
        className="location-icon"
        id="way-icon"
        src={require("./way.svg")}
        alt=""
      />
        <h1 className = "first-line">TRAVEL INFO</h1>
        <h3 className = "delays-line">DELAYS</h3>
        <h1 className = "station-line">LUND C</h1>
        <h1 className = "time-line">5 MIN</h1>
    </div>
    )
}

export default HardCodeTrainInfo;