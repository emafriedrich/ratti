import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { FormHelperText } from "@mui/material";
import { FormControl } from "@mui/material";
import ProgressButtons from "./button";

const SecondStep = () => {
  console.log('paso2')
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
      <FormControl sx={{ mt: 10, mb: 2, minWidth: 120,width:'80%'}} direction="row">
        <Stack direction="row" sx={{width:'100%'}}>
  
            <TextField
              fullWidth
              label="ingresa calle y altura"
              TextField
              sx={{ m:4}}
              color="error"
              value={streetIdress}
              onChange={handleChangeStreetIdress}
            ></TextField>
         </Stack>

            <Stack direction="row" sx={{width:'100%'}}>
            <TextField
            label="Provincia"
              TextField
              sx={{ m:4, width:'50%'}}
              color="error"
              value={subTipeBuildings}
              onChange={handleChangeSubBuildings}
            ></TextField>
            <TextField
            label="Ciudad"
              TextField
              sx={{ m:4, width:'50%'}}
              color="error"
              value={Province}
              onChange={handleChangeSubBuildings}
            ></TextField>
  </Stack>
  <Stack direction="row" sx={{width:'100%'}}>
            <TextField
            label="Barrio"
              TextField
              sx={{ m:4, width:'50%'}}
              color="error"
              value={neighborhood}
              onChange={handleChangeSubBuildings}
            ></TextField>
            <TextField
            label="Zona"
              TextField
              sx={{ m:4, width:'50%'}}
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
          <Button
            variant="outlined"
            color="error"
            style={{ width: "150px", height: "50px", borderRadius: "10px" }}
            sx={{ color: "#000000" }}
          >
            Guardar{" "}
          </Button>
         <ProgressButtons/>          
        </Stack>
      </Box>
    </div>
  );
};

export default SecondStep;
