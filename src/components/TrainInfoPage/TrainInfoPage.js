import React, { useState, useEffect } from "react";
import { myApiCall } from "../../services/TrainInfoService";
import traininfostyle from "./TrainInfoComponent.module.css";

// Functional component initiated for fetching info from trainbrain API
const TrainBrainAPI = () => {
  //API call is done in another comonent
  const myData = myApiCall();
  //usestate is used for information/variables that change frequently,
  //onchange can be called inside useeffect to change the state of variables.

  const [disruptions, onChangeDisruptions] = useState();
  const [accuracy, onChangeAccuracy] = useState();
  const [scheduled, onChangeScheduled] = useState();
  const [trainNumber, onChangeTrainNumber] = useState();

  useEffect(() => {
    if (disruptions) {
      return;
    }
    //We fetch the info stored in myData from the API call
    myData.then(data => {
      //here we find the Lund C station used in the MVP
      const disruptedStation = data.prognosis.find(
        disruption => disruption.station === "Lu"
      );
      //The rest is finding specific information under "Lund C" in myData (json file fetched from TrainBrain API)
      //Using ternary operations "if the station is disrupted, find xyz info, else return 0"
      let displayDelay = disruptedStation
        ? disruptedStation.predicted_delay_minutes
        : 0;
      let displayAccuracy = disruptedStation
        ? disruptedStation.predicted_delay_accuracy
        : 0;

      let displayTrainNumber = disruptedStation
        ? disruptedStation.trainnr
        : "No train";

      let displayScheduled = function() {
        if (disruptedStation) {
          //The time is displayed in 00:00:00 form, so we turn the string into an array
          //and splice the last 3 characters off to get 00:00 format
          let stationArray = disruptedStation.scheduled.split("");
          return stationArray.splice(0, 5);
        } else {
          return 0;
        }
      };
      //We change the state of the info variables we want to display according to what we got from the API
      //This updates the DOM from default state (no info or empty array) to the info fetched.
      onChangeDisruptions(displayDelay);
      onChangeAccuracy(displayAccuracy);
      onChangeScheduled(displayScheduled);
      onChangeTrainNumber(displayTrainNumber);
    });
  });

  return (
    <div className={traininfostyle.infoComponent}>
      {/* <div className={traininfostyle.greeter}>
        <Greeter />
      </div> */}

      <h2 className={traininfostyle.styleLarge}>LUND C</h2>
      <h3 className={traininfostyle.styleSmall}>NEXT TRAIN</h3>
      <h4 className={traininfostyle.styleLarge} id={traininfostyle.time}>
        {scheduled}
      </h4>

      {disruptions === "0" && accuracy === "100%" ? (
        <p className={traininfostyle.delayInfo}>NO DELAYS</p>
      ) : (
        <p className={traininfostyle.delayInfo}>
          {disruptions} MIN DELAY<br></br>
          {accuracy} ACCURACY{" "}
        </p>
      )}
      <h3 className={traininfostyle.styleSmallest}>TRAIN NR. {trainNumber}</h3>
      <img
        className={traininfostyle.waysvg}
        src={require("../../assets/backgroundimg.svg")}
        alt=""
      />
    </div>
    //Return statement gets the info passed in curlybraces
    //JSX is returned and will get rendered when the component is added to app.js
  );
};

export default TrainBrainAPI;
