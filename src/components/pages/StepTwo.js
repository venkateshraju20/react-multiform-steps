import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { multiContext } from "../../StepContext";

const StepTwo = () => {
  const { setCurrentStep, userData, setUserData } = useContext(multiContext);

  const { email, country, city } = userData;

  const handleData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <div>
        <TextField
          label="Email Address"
          margin="normal"
          variant="outlined"
          color="secondary"
          name="email"
          value={email}
          onChange={(e) => handleData(e)}
        />
      </div>
      <div>
        <TextField
          label="Country"
          margin="normal"
          variant="outlined"
          color="secondary"
          name="country"
          value={country}
          onChange={(e) => handleData(e)}
        />
      </div>
      <div>
        <TextField
          label="City"
          margin="normal"
          variant="outlined"
          color="secondary"
          name="city"
          value={city}
          onChange={(e) => handleData(e)}
        />
      </div>
      <div>
        <Button variant="contained" onClick={() => setCurrentStep(1)}>
          Back
        </Button>{" "}
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCurrentStep(3)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
