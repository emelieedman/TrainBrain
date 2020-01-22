import React, { useState } from "react";
import { myApiCall } from "../services/TrainInfoService";

const TrainBrainAPI = () => {
  const myData = myApiCall();
  let d;
  const [timestamp, onChangeTimestamp] = useState("hej");
  const [myStation, onChangeStation] = useState("");
  const [disruptions, onChangeDisruptions] = useState();

  myData.then(data => {
    onChangeTimestamp(data.timestamp);
    const disruptions = data.disruptions.map(disruption => {
      if (disruption.station.station === "Stockholm Odenplan") {
        return (
          <div>
            <h1>Delay in Stockholm Odenplan latest 30 mins</h1>
            <p>Delay count {disruption.delaycount}</p>
          </div>
        );
      } else {
        console.log("hej");
      }
    });
    onChangeDisruptions(disruptions);
  });

  return <div>{disruptions}</div>;
};

export default TrainBrainAPI;
