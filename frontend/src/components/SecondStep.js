import React from "react";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import ProgressButtons from "./button";

const SecondStep = () => {
  console.log("paso2");
  const [streetIdress, setstreetIdress] = React.useState("");
  const [subTipeBuildings, setsubtipebuildings] = React.useState("");
  const [Province, setProvince] = React.useState("");
  const [neighborhood, setneighborhood] = React.useState("");
  const [zone, setzone] = React.useState("");

  const handleChangeStreetIdress = (event) => {
    setstreetIdress(event.target.value);
  };

 

  const handleChangeSubBuildings = (event) => {
    setsubtipebuildings(event.target.value);
  };
  return (
    <div>
      <h2>Ingresa la ubicacion de la propiedad</h2>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          ml: 4,
          mt: 8,
        }}
      >
        <Typography sx={{ width: "50%" }}>
          <b>Ingresa calle y altura</b>
        </Typography>
      </Box>
      <FormControl sx={{ mb: 2, minWidth: 120, width: "80%" }} direction="row">
        <Stack direction="row" sx={{ width: "100%" }}>
          <TextField
            fullWidth
            label=""
            TextField
            sx={{ m: 4 }}
            color="error"
            value={streetIdress}
            onChange={handleChangeStreetIdress}
          ></TextField>
        </Stack>
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%" , mt:5, ml:4 }}>
        <Typography sx={{width:'50%'}}><b>Provincia</b></Typography>
        <Typography sx={{width:'40%'}}><b>Ciudad</b></Typography>
        </Box>
        <Stack direction="row" sx={{ width: "100%" }}>
          <TextField
            
            TextField
            sx={{ m: 4, width: "50%" }}
            color="error"
            value={subTipeBuildings}
            onChange={handleChangeSubBuildings}
          ></TextField>

          <TextField
            
            TextField
            sx={{ m: 4, width: "50%" }}
            color="error"
            value={Province}
            onChange={handleChangeSubBuildings}
          ></TextField>
        </Stack>
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%" , mt:5, ml:4 }}>
        <Typography sx={{width:'50%'}}><b>Barrio</b></Typography>
        <Typography sx={{width:'40%'}}><b>Subzona</b></Typography>
        </Box>
        <Stack direction="row" sx={{ width: "100%" }}>
          <TextField
            
           
            TextField
            sx={{ m: 4, width: "50%" }}
            color="error"
            value={neighborhood}
            onChange={handleChangeSubBuildings}
          ></TextField>
          <TextField
          disabled
          
            TextField
            sx={{ m: 4, width: "50%" }}
            color="error"
            value={zone}
            onChange={handleChangeSubBuildings}
          ></TextField>
        </Stack>
      </FormControl>
      <Box>
        <Stack
          spacing={2}
          direction="row"
          justifyContent={"Flex-end"}
          sx={{ mt: 10 }}
        >
          <ProgressButtons />
        </Stack>
      </Box>
    </div>
  );
};

export default SecondStep;
