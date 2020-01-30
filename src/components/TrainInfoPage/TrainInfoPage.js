import React, { useState, useEffect } from "react";
import { myApiCall } from "../../services/TrainInfoService";
import "./TrainInfoComponent.css";

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

  //   return (
  //     <div className="info-component">
  //       <img
  //         className="location-icon"
  //         id="way-icon"
  //         src={require("./way.svg")}
  //         alt=""
  //       />
  //       <h1 className="first-line">TRAVEL INFO</h1>
  //       <h1 className="station-line">LUND C</h1>
  //       <h3 className="delays-line">DELAY</h3>
  //       <h1 className="time-line">{disruptions}</h1>
  //     </div>
  //   );
  // };

  return (
    <div className="info-component">
      <img
        className="location-icon"
        id="way-icon"
        src={require("./way.svg")}
        alt=""
      />
      <h1 className="travel-info">TRAVEL INFO</h1>
      <h1 className="style-large">LUND C</h1>
      <h3 className="style-small">NEXT TRAIN</h3>
      <h4 className="style-large">{scheduled}</h4>

      {disruptions === "0" && accuracy === "100%" ? (
        <div className="delay-info">
          <p className="style-large"></p> <br></br>
          <p className="delay-info">NO DELAYS</p>
        </div>
      ) : (
        <div className="delay-info">
          <p>
            <br></br>{disruptions} min delay<br></br>
            {accuracy} accuracy{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default TrainBrainAPI;
