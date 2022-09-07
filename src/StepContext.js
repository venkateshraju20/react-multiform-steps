import React, { useState } from "react";
import App from "./App";

export const multiContext = React.createContext();

const StepContext = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState([
    {
      firstName: "",
      lastName: "",
      contact: "",
      email: "",
      country: "",
      city: "",
      company: "",
      designation: "",
    },
  ]);
  const [finalData, setFinalData] = useState([]);

  const submitData = () => {
    setFinalData([...finalData, userData]);
    setUserData("");
    setCurrentStep(1);
  };

  return (
    <div>
      <multiContext.Provider
        value={{
          currentStep,
          setCurrentStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
          submitData,
        }}
      >
        <App />
      </multiContext.Provider>
    </div>
  );
};

export default StepContext;
