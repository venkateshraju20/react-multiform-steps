import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { multiContext } from "../../StepContext";

const StepThree = () => {
  const { setCurrentStep, userData, setUserData, submitData } =
    useContext(multiContext);

  const { company, designation } = userData;

  const handleData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <div>
        <TextField
          label="Company"
          margin="normal"
          variant="outlined"
          color="secondary"
          name="company"
          value={company}
          onChange={(e) => handleData(e)}
        />
      </div>
      <div>
        <TextField
          label="Designation"
          margin="normal"
          variant="outlined"
          color="secondary"
          name="designation"
          value={designation}
          onChange={(e) => handleData(e)}
        />
      </div>
      <div>
        <Button variant="contained" onClick={() => setCurrentStep(2)}>
          Back
        </Button>{" "}
        <Button variant="contained" color="primary" onClick={submitData}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default StepThree;
