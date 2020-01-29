import React from "react";
import "./App.css";
import Greeter from "./components/Greeter/Greeter";
import Meditation from "./components/Meditation/Meditation";
import TrainInfoPage from "./components/TrainInfoPage/TrainInfoPage";
import TravelProfile from "./components/TravelProfile/TravelProfile";

function App() {
  return (
    <div>
      <TravelProfile />
      {/* <Greeter />
      <TrainInfoPage />
      <Meditation /> */}
    </div>
  );
}

export default App;
