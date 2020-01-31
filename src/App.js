import React from "react";
import "./App.css";
import Meditation from "./components/Meditation/Meditation";
import TrainInfoPage from "./components/TrainInfoPage/TrainInfoPage";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

function App() {
  return (
    <div id="background-image">
      <TrainInfoPage />
      <Meditation />
    </div>
  );
}

export default LoadingScreen(App);
