import React, { useState, useEffect } from "react";
import { myApiCall } from "../../services/TrainInfoService";
import "./TrainInfoComponent.css";
import Greeter from "../Greeter/Greeter";

const TrainBrainAPI = () => {
  const myData = myApiCall();
  const [disruptions, onChangeDisruptions] = useState();
  const [accuracy, onChangeAccuracy] = useState();
  const [scheduled, onChangeScheduled] = useState();

  useEffect(() => {
    if (disruptions) {
      return;
    }

    myData.then(data => {
      let displayDelay = function() {
        const disruptedStation = data.prognosis.find(
          disruption => disruption.station === "Lu"
        );
        if (disruptedStation) {
          return disruptedStation.predicted_delay_minutes;
        } else {
          return 0;
        }
      };

      let displayAccuracy = function() {
        const disruptedStation = data.prognosis.find(
          disruption => disruption.station === "Lu"
        );
        if (disruptedStation) {
          return disruptedStation.predicted_delay_accuracy;
        } else {
          return 0;
        }
      };

      let displayScheduled = function() {
        const disruptedStation = data.prognosis.find(
          disruption => disruption.station === "Lu"
        );
        if (disruptedStation) {
          let stationArray = disruptedStation.scheduled.split("");
          return stationArray.splice(0, 5);
        } else {
          return 0;
        }
      };

      onChangeDisruptions(displayDelay);
      onChangeAccuracy(displayAccuracy);
      onChangeScheduled(displayScheduled);
    });
  });

  return (
    <div className="main-content">
      <Greeter />
      <div className="info-component">
        <h1 className="travel-info">TRAVEL INFORMATION</h1>
        <h1 className="style-large">LUND C</h1>
        <h3 className="style-small">NEXT TRAIN</h3>
        <h4 className="style-large" id="time">
          {scheduled}
        </h4>

        {disruptions === "0" && accuracy === "100%" ? (
          <p className="delay-info">NO DELAYS</p>
        ) : (
          <p className="delay-info">
            {disruptions} MIN DELAY<br></br>
            {accuracy} ACCURACY{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default TrainBrainAPI;
