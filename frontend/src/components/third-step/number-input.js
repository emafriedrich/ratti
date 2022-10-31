import React, { useState } from "react";
import { TextField } from "@mui/material";

import { IconButton, InputAdornment } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const NumberFeature = ({ name, onChange }) => {
  const [value, setValue] = useState(0);

  return (
    <TextField
      className="textField"
      label={name}
      size="small"
      color="error"
      value={value}
      onChange={() => onChange(value)}
      InputProps={{
        type: "number",
        sx: { padding: "0", textAlign: "center" },
        inputProps: { style: { textAlign: "center", height: "30px" } },
        startAdornment: (
          <InputAdornment position="start">
            <IconButton
              disabled={value <= 0}
              onClick={() => {
                setValue(value - 1);
                onChange(value - 1);
              }}
            >
              <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>{" "}
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="start">
            <IconButton
              onClick={() => {
                setValue(value + 1);
                onChange(value + 1);
              }}
            >
              <AddCircleOutlineIcon></AddCircleOutlineIcon>{" "}
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{ width: "140px", mr: 10, mt: 2 }}
      variant="outlined"
    />
  );
};

export default NumberFeature;
