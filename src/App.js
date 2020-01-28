import React from "react";
import "./App.css";
import Greeter from "./components/Greeter/Greeter";
import Meditation from "./components/Meditation/Meditation";
import TrainInfoPage from "./components/TrainInfoPage/TrainInfoPage";

function App() {
  return (
    <div>
      <Greeter />
      <Meditation />
      <TrainInfoPage />
    </div>
  );
}

export default App;
