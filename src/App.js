import React, { useState } from "react";
import buttonStyle from "../src/buttonStyle.module.css";
import Meditation from "./components/Meditation/Meditation";
import TrainInfoPage from "./components/TrainInfoPage/TrainInfoPage";
import TravelProfile from "./components/TravelProfile/TravelProfile";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function submitButton() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <button id={buttonStyle.submitButton} onClick={() => submitButton()}>
            SUBMIT
          </button>
          <TravelProfile />
        </div>
      ) : (
        <div>
          <TrainInfoPage />
          <Meditation />
        </div>
      )}
    </div>
  );
}

export default LoadingScreen(App);
