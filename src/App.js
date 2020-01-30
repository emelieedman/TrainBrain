import React, { useState } from "react";
import "./App.css";
import Greeter from "./components/Greeter/Greeter";
import Meditation from "./components/Meditation/Meditation";
import TrainInfoPage from "./components/TrainInfoPage/TrainInfoPage";
import TravelProfile from "./components/TravelProfile/TravelProfile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function submitButton() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <button id="submit-button" onClick={() => submitButton()}>
            SUBMIT
          </button>
          <TravelProfile />
        </div>
      ) : (
        <div>
          <Greeter />
          <TrainInfoPage />
          <Meditation />
        </div>
      )}
    </div>
  );
}

export default App;
