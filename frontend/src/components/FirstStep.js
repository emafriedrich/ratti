import React from "react";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormHelperText } from "@mui/material";
import { FormControl } from "@mui/material";
import ProgressButtons from "./button";


const FirstStep = () => {
  console.log('paso1')
  const [buildings, setbuildings] = React.useState("");
  const [subTipeBuildings, setsubtipebuildings] = React.useState("");
  const [selectOn, setSelectOn] = React.useState(true);

  const handleChangeBuildings = (event) => {
    setbuildings(event.target.value);
    setSelectOn(false);
  };

  const handleChangeSubBuildings = (event) => {
    setsubtipebuildings(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ mt: 10, mb: 2, minWidth: 120 }} direction="row">
        <Stack direction="row">
          <Box>
            <Select
              select
              sx={{ width: "300px", mr: 4 }}
              color="error"
              value={buildings}
              onChange={handleChangeBuildings}
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="Lotes" sx={{ textAlign: "center" }}>
                Lotes
              </MenuItem>
              <MenuItem value="Edificios">Edificios</MenuItem>
            </Select>
            <FormHelperText sx={{ textAlign: "center" }}>
              Titulo de Propiedad
            </FormHelperText>
          </Box>
          <Box>
            <Select
              disabled={selectOn}
              select
              sx={{ width: "300px" }}
              color="error"
              value={subTipeBuildings}
              onChange={handleChangeSubBuildings}
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="Lotes" sx={{ textAlign: "center" }}>
                Lotes
              </MenuItem>
              <MenuItem value="Edificios">Edificios</MenuItem>
            </Select>
            <FormHelperText sx={{ textAlign: "center" }}>
              Subtipo de Propiedad
            </FormHelperText>
          </Box>
        </Stack>
      </FormControl>
      <Box>
      <ProgressButtons />
      </Box>
    </div>
  );
};

export default FirstStep;
