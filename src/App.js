import React from "react";
import "./App.css";
import Greeter from "./components/Greeter/Greeter";
import Meditation from "./components/Meditation/Meditation";
import TrainInfoPage from "./components/TrainInfoPage/TrainInfoPage";

function App() {
  return (
    <div>
      <Greeter />
      <TrainInfoPage />
      <Meditation />

    </div>
  );
}

export default App;
