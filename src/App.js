import React from "react";
import "./App.css";
import Greeter from "./components/Greeter/Greeter";
import Meditation from "./components/Meditation/Meditation";

import TrainInfoComponent from "./components/TrainInfoComponent/TrainInfoComponent";

function App() {
  return (
    <div>
      <Greeter />
      <Meditation />
      <TrainInfoComponent />
    </div>
  );
}

export default App;
