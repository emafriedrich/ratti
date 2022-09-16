import React from "react";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
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
      <FormControl sx={{ mt: 6, mb: 2, minWidth: 120 }} direction="row">
      <Box sx={{ display: "flex", flexDirection: "row", width: "100%" , mb:5 }}>
        <Typography sx={{width:'53%',fontSize:'20px'}}><b>Tipo de Propiedad</b></Typography>
        <Typography sx={{width:'40%',fontSize:'20px'}}><b>Subtipo de Propiedad</b></Typography>
        </Box>
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
