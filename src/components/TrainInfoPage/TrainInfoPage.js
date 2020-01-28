import React, { useState, useEffect } from "react";
import { myApiCall } from "../../services/TrainInfoService";
import "./TrainInfoComponent.css";

const TrainBrainAPI = () => {
  const myData = myApiCall();
  const [disruptions, onChangeDisruptions] = useState();

  useEffect(() => {
    if (disruptions) {
      return;
    }

    myData.then(data => {
      let displayDelay = function() {
        const disruptedStation = data.disruptions.find(
          disruption => disruption.station.station === "Lund C"
        );
        console.log(disruptedStation);

        if (disruptedStation) {
          return disruptedStation.delaycount;
        } else {
          return 0;
        }
      };

      onChangeDisruptions(displayDelay);
    });
  });

  return (
    <div className="info-component">
      <img
        className="location-icon"
        id="way-icon"
        src={require("./way.svg")}
        alt=""
      />
      <h1 className="first-line">TRAVEL INFO</h1>
      <h1 className="station-line">LUND C</h1>
      <h3 className="delays-line">DELAY</h3>
      <h1 className="time-line">1 MIN{disruptions}</h1>
      {/* hardcoded 1 MIN to be able to style it, can be removed */}
    </div>
  );
};

export default TrainBrainAPI;
