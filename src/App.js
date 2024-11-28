
import React, { useState } from "react";
import Home from "./components/Home";
import Calculations from "./components/Calculations";

function App() {
  const [numCalculations, setNumCalculations] = useState(20);
  const [isCalculating, setIsCalculating] = useState(false);

  const startCalculations = (number) => {
    setNumCalculations(number);
    setIsCalculating(true);
  };

  const goHome = () => {
    setIsCalculating(false);
  };

  return (
    <div className="App">
      {isCalculating ? (
        <Calculations numCalculations={numCalculations} onHome={goHome} />
      ) : (
        <Home onStart={startCalculations} />
      )}
    </div>
  );
}

export default App;
