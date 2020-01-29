import React from "react";
import "./App.css";
import Greeter from "./components/Greeter/Greeter";
import Meditation from "./components/Meditation/Meditation";
import TrainInfoPage from "./components/TrainInfoPage/TrainInfoPage";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

function App() {
  return (
    <div>
      <Greeter />
      <TrainInfoPage />
      <Meditation />
    </div>
  );
}

export default LoadingScreen(App);
