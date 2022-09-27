import React from "react";
import { TextField } from "@mui/material";

import { IconButton, InputAdornment } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const NumberFeature = ({ name }) => {
  return <TextField
    className="textField"
    value={0}
    label={name}
    size="small"
    color="error"
    InputProps={{
      step: 1,
      min: 0,
      max: 9,
      type: "number",
      sx: { padding: '0', textAlign: 'center' },
      inputProps: { style: { textAlign: 'center', height: '30px' } },
      startAdornment: (
        <InputAdornment position="start">
          <IconButton>
            <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>{" "}
          </IconButton>
        </InputAdornment>
      ),
      endAdornment: (
        <InputAdornment position="start">
          <IconButton>
            <AddCircleOutlineIcon></AddCircleOutlineIcon>{" "}
          </IconButton>
        </InputAdornment>
      ),
    }}
    sx={{ width: "140px", mr: 10, mt: 2 }}
    variant="outlined"
  />
};

export default NumberFeature;
