import React, { useState, useEffect } from "react";
import { myApiCall } from "../services/TrainInfoService";


const TrainBrainAPI = () => {

 
  const myData = myApiCall();
  const [disruptions, onChangeDisruptions] = useState();
  const [accuracy, onChangeAccuracy] = useState();
  const [scheduled, onChangeScheduled] = useState();

  useEffect (() => {

    if (disruptions) {
      return
    }

    myData.then(data => {

      let displayDelay = function () {
        const disruptedStation = data.prognosis.find(disruption => disruption.station === "Lu");
      
      
        if (disruptedStation) {

          return disruptedStation.predicted_delay_minutes;
        } else {
          return 0;

        }
      }

      let displayAccuracy = function () {
        const disruptedStation = data.prognosis.find(disruption => disruption.station === "Lu");
        
      
        if (disruptedStation) {

          return disruptedStation.predicted_delay_accuracy;
        } else {
          return 0;

        }
      }

      let displayScheduled = function () {
        const disruptedStation = data.prognosis.find(disruption => disruption.station === "Lu");
      
        if (disruptedStation) {
          let stationArray = disruptedStation.scheduled.split("");
          return stationArray.splice(0, 5);
        } else {
          return 0;

        }
      }

     
      onChangeDisruptions(displayDelay);
      onChangeAccuracy(displayAccuracy);
      onChangeScheduled(displayScheduled);


    });
  })
 

  return (
    <div>
      <h1>Delays in Lund C: </h1>
      {disruptions === "0" && accuracy === "100%" ? <p>Next train is scheduled at {scheduled} and there are no delays!</p> : <p>Next train is scheduled at {scheduled} and it is delayed by {disruptions} mins with {accuracy} accuracy!</p> }

    </div>
  );
};

export default TrainBrainAPI;

