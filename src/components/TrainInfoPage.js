import React, { useState, useEffect } from "react";
import { myApiCall } from "../services/TrainInfoService";


const TrainBrainAPI = () => {

 
  const myData = myApiCall();
  const [disruptions, onChangeDisruptions] = useState();

  useEffect (() => {

    if (disruptions) {
      return
    }

    myData.then(data => {
      
      let displayDelay = function () {
        const disruptedStation = data.disruptions.find(disruption => disruption.station.station === "Lund C");
        console.log(disruptedStation)
      
        if (disruptedStation) {
          return disruptedStation.delaycount;
        } else {
          return 0;
        }
      }

      onChangeDisruptions(displayDelay);
    });
  })
 

  return (
    <div>
      <h1>Delays in Lund C latest 120 mins: </h1>
      <p>{disruptions}</p>
    </div>
  );
};

export default TrainBrainAPI;
