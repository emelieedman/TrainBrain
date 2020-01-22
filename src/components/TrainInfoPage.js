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
      if (disruption.station === "Stockholm Central") {
        return (
          <div>
            <h1>Delay</h1>
            <p>{disruption.delaycount}</p>
          </div>
        );
      } else {
        return <h1>No delay</h1>;
      }
    });
    onChangeDisruptions(disruptions);
  });

  return <div>{disruptions}</div>;
};

export default TrainBrainAPI;
