import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import Propertylist from "./propertylist";

const SearchPlace = () => {
  const [ubication, setUbication] = React.useState("");
  const handleChangeUbication = (event) => {
    setUbication(event.target.value);
  };

  const [property, setProperty] = React.useState("");

  const handleChangeTipeProperty = (event) => {
    setProperty(event.target.value);
  };
  const [propertyType, setPropertyType] = useState('all');

  return (
    <Box style={{ marginLeft: '10%', width: "80%" }} >
      <FormControl sx={{ display: "flex", flexDirection: "row", marginTop: '60px', alignItems: 'center' }}>
        <TextField
          onChange={handleChangeUbication}
          placeholder="Nombre de la propiedad o lote"
          value={ubication}
          color="error"
          sx={{ width: '30%' }}
        ></TextField>

        <Select
          select
          sx={{ width: "200px", marginLeft: '1%', borderRadius: "10px" }}
          color="error"
          value={propertyType}
          onChange={ (event) => setPropertyType(event.target.value)}
        >
          <MenuItem value="all">Todos</MenuItem>
          <MenuItem value="department" >Departamento</MenuItem>
          <MenuItem value="lote" >Lote</MenuItem>
        </Select>
        <span style={{ marginLeft: 'auto' }}> 3 propiedades encontradas </span>
      </FormControl>
      <Propertylist />
    </Box>
  );
};

export default SearchPlace;
