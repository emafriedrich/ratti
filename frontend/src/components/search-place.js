import React from "react";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";

const SearchPlace = () => {
  const [ubication, setUbication] = React.useState("");
  const handleChangeUbication = (event) => {
    setUbication(event.target.value);
  };

  const [property, setProperty] = React.useState("");

  const handleChangeTipeProperty = (event) => {
    setProperty(event.target.value);
  };
  return (
    <div>
      <span>un textfield, 2 select, 3 dialog , button(guardar)</span>
      <FormControl>
        <TextField
          onChange={handleChangeUbication}
          placeholder="Buscar por ciudad o barrio"
          value={ubication}
          color="error"
        ></TextField>

        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          color="error"
          label="Age"
        >
          <MenuItem value=""></MenuItem>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            color="error"
          >
            <FormControlLabel
              value="alquilar"
              control={<Radio />}
              label="Alquilar"
            />
            <FormControlLabel
              value="comprar"
              control={<Radio />}
              label="Comprar"
            />
            <FormControlLabel
              value="temporal"
              control={<Radio />}
              label="Temporal"
            />
            <FormControlLabel
              value="emprendimientos"
              control={<Radio />}
              label="Emprendimientos"
            />
          </RadioGroup>
        </Select>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          color="error"
          label="Age"
        >
          <FormGroup>
            
             
            <Box sx={{margin:'10px', fontSize:'20px',fontWeight:'500'}}><bold>Titulo de Propiedad</bold></Box>
            <FormControlLabel
              control={<Checkbox color="error" defaultChecked />}
              label="Departamento"
            />
            <FormControlLabel control={<Checkbox color="error"/>} label="Terreno" />
            <Divider />
            <Box ><Button variant="contained" color='error' sx={{width:'100px', height:'30px'}}></Button><Button variant="contained" color='error'></Button></Box>
          </FormGroup>
        </Select>
      </FormControl>
    </div>
  );
};

export default SearchPlace;
