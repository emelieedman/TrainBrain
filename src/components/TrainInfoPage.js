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
      const newDisruptions = data.disruptions.map(disruption => {
        if (disruption.station.station === "Lund C") {
          return disruption.delaycount
        }
      });
      onChangeDisruptions(newDisruptions);
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
