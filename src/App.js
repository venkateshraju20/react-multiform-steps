import { Stepper, StepLabel, Step } from "@material-ui/core";
import { useContext } from "react";

import "./App.css";
import DisplayData from "./components/DisplayData";
import StepOne from "./components/pages/StepOne";
import StepThree from "./components/pages/StepThree";
import StepTwo from "./components/pages/StepTwo";
import { multiContext } from "./StepContext";

function App() {
  const { currentStep, finalData } = useContext(multiContext);

  const showSteps = (step) => {
    switch (step) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      default:
        return;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{ color: "red" }}>Multi Step Application</h3>
        <Stepper
          style={{ width: "18%" }}
          activeStep={currentStep - 1}
          orientation="horizontal"
        >
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
        {showSteps(currentStep)}
      </header>
      <br />
      {finalData.length > 0 ? <DisplayData /> : null}
    </div>
  );
}

export default App;
