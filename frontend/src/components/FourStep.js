import React from "react";
import Stack from "@mui/material/Stack";
import ProgressButtons from "./button";
const FourStep = () => {
  console.log('paso4')
  return (
    <div>
      <h1>paso4</h1>
      <Stack spacing={2} direction="row">
        <ProgressButtons />
      </Stack> 
    </div>
  );
};

export default FourStep;
