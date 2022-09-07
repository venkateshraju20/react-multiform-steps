import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { multiContext } from "../../StepContext";

const StepOne = () => {
  const { setCurrentStep, userData, setUserData } = useContext(multiContext);

  const { firstName, lastName, contact } = userData;

  const handleData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <div>
        <TextField
          label="First Name"
          margin="normal"
          variant="outlined"
          color="secondary"
          name="firstName"
          value={firstName}
          onChange={(e) => handleData(e)}
        />
      </div>
      <div>
        <TextField
          label="Last Name"
          margin="normal"
          variant="outlined"
          color="secondary"
          name="lastName"
          value={lastName}
          onChange={(e) => handleData(e)}
        />
      </div>
      <div>
        <TextField
          label="Contact Number"
          margin="normal"
          variant="outlined"
          color="secondary"
          name="contact"
          value={contact}
          onChange={(e) => handleData(e)}
        />
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCurrentStep(2)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepOne;
