import React from "react";
import Stack from "@mui/material/Stack";
import { FormControlLabel, TextField } from "@mui/material";
import { IconButton } from "@mui/material";
import ArrowCircleUpTwoToneIcon from "@mui/icons-material/ArrowCircleUpTwoTone";
import ArrowCircleDownTwoToneIcon from "@mui/icons-material/ArrowCircleDownTwoTone";
import { Box } from "@mui/material";
import HomeWorkTwoToneIcon from "@mui/icons-material/HomeWorkTwoTone";
import WallpaperTwoToneIcon from "@mui/icons-material/WallpaperTwoTone";
import ProgressButtons from "./button";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import Checkbox from "@mui/material/Checkbox";
import "./ThirdStep.css";

const ThirdStep = () => {
  const [ageBuilding, setAgeBuilding] = React.useState("");
  const [numberAgeHidden, setnumberAgeHidden] = React.useState("none");
  const handleAgeBuilding = (e) => {
    setAgeBuilding(e.target.value);
    if (e.target.value === "oldBuilding") {
      handleNumberAgeHidden("");
    }
    if (e.target.value !== "oldBuilding") {
      setnumberAgeHidden("none");
    }
  };
  const handleNumberAgeHidden = (e) => {
    setnumberAgeHidden("flex");
  };
  const currencies = [
    {
      value: "u$s",
      label: "Dólar Estadounidense",
    },
    {
      value: "$",
      label: "Peso Argentino",
    },
  ];
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const [values, setValues] = React.useState({
    amount: "",
  });
  const handleChangeAmount = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const [countCharacter,SetCountCharacter] = React.useState(0);

  

  const [checked, setChecked] = React.useState(true);

  const handleChangeCheckbox = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Stack direction="column" spacing={3} sx={{ mb: "50px",padding:'50px',ml:'10%' }}>
        <Box style={{ marginTop: "50px", marginBottom: "15px" }}>
          <Typography style={{ fontSize: "24px" }}>
            <b>Características Principales</b>
          </Typography>
        </Box>
        <Box sx={{ width: "50%" }}>
          <IconButton>
            <ArrowCircleDownTwoToneIcon></ArrowCircleDownTwoToneIcon>
          </IconButton>

          <TextField
            value={0}
            label="ambientes"
            size="small"
            inputProps={{
              step: 1,
              min: 0,
              max: 9,
              type: "number",
            }}
            sx={{ width: "140px" }}
            variant="standard"
          />

          <IconButton>
            <ArrowCircleUpTwoToneIcon></ArrowCircleUpTwoToneIcon>
          </IconButton>

          <IconButton>
            <ArrowCircleDownTwoToneIcon></ArrowCircleDownTwoToneIcon>
          </IconButton>

          <TextField
            value={0}
            label="dormitorios"
            size="small"
            inputProps={{
              step: 1,
              min: 0,
              max: 9,
              type: "number",
            }}
            sx={{ width: "140px" }}
            variant="standard"
          />

          <IconButton>
            <ArrowCircleUpTwoToneIcon></ArrowCircleUpTwoToneIcon>
          </IconButton>
        </Box>
        <Box sx={{ width: "50%" }}>
          <IconButton>
            <ArrowCircleDownTwoToneIcon></ArrowCircleDownTwoToneIcon>
          </IconButton>

          <TextField
            value={0}
            label="dormitorios"
            size="small"
            inputProps={{
              step: 1,
              min: 0,
              max: 9,
              type: "number",
            }}
            sx={{ width: "140px" }}
            variant="standard"
          />

          <IconButton>
            <ArrowCircleUpTwoToneIcon></ArrowCircleUpTwoToneIcon>
          </IconButton>

          <IconButton>
            <ArrowCircleDownTwoToneIcon></ArrowCircleDownTwoToneIcon>
          </IconButton>

          <TextField
            value={0}
            label="dormitorios"
            size="small"
            inputProps={{
              step: 1,
              min: 0,
              max: 9,
              type: "number",
            }}
            sx={{ width: "140px" }}
            variant="standard"
          />

          <IconButton>
            <ArrowCircleUpTwoToneIcon></ArrowCircleUpTwoToneIcon>
          </IconButton>
        </Box>
        <Box sx={{ width: "50%" }}>
          <IconButton>
            <ArrowCircleDownTwoToneIcon></ArrowCircleDownTwoToneIcon>
          </IconButton>

          <TextField
            value={0}
            label="dormitorios"
            size="small"
            inputProps={{
              step: 1,
              min: 0,
              max: 9,
              type: "number",
            }}
            sx={{ width: "140px" }}
            variant="standard"
          />

          <IconButton>
            <ArrowCircleUpTwoToneIcon></ArrowCircleUpTwoToneIcon>
          </IconButton>
        </Box>

        <Box style={{ marginTop: "50px" }}>
          <bold style={{ fontSize: "24px" }}>
            <b>Superficies</b>
          </bold>
        </Box>
        <Box sx={{ width: "50%" }}>
          <IconButton>
            <HomeWorkTwoToneIcon></HomeWorkTwoToneIcon>
          </IconButton>
          <TextField
            label="Superficie Cubierta"
            size="small"
            inputProps={{
              step: 1,

              type: "number",
            }}
            sx={{ width: "140px", marginRight: "42px" }}
            variant="standard"
            placeholder="m2"
            multiline
          />

          <IconButton>
            <WallpaperTwoToneIcon></WallpaperTwoToneIcon>
          </IconButton>
          <TextField
            label="Superficie Total"
            size="small"
            inputProps={{
              step: 1,

              type: "number",
            }}
            sx={{ width: "140px" }}
            variant="standard"
            placeholder="m2"
          />
        </Box>
        <Box style={{ marginTop: "50px" }}>
          <Typography style={{ fontSize: "24px", display: "block" }}>
            <b>Antigüedad</b>
          </Typography>
          <Box style={{ display: "flex", flexDirection: "row" }}>
            <Select
              select
              sx={{ width: "200px", mt: 4, borderRadius: "10px" }}
              color="error"
              onChange={handleAgeBuilding}
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="newbuilding" sx={{ textAlign: "center" }}>
                A estrenar
              </MenuItem>
              <MenuItem value="oldBuilding" sx={{ textAlign: "center" }}>
                Años de Antigüedad
              </MenuItem>
              <MenuItem value="inconstructionBuilding">
                En construcción
              </MenuItem>
            </Select>
            <Box
              sx={{
                width: "170px",
                display: numberAgeHidden,
                mt: "35px",
                ml: "35px",
              }}
            >
              <TextField
                color="error"
                size="large"
                inputProps={{
                  type: "number",
                }}
                variant="outlined"
                sx={{ width: "170px" }}
              />
            </Box>
          </Box>
        </Box>
        <Box style={{ marginTop: "50px" }}>
          <Typography style={{ fontSize: "24px", display: "block" }}>
            <b>Precio</b>
          </Typography>
          <Box style={{ display: "flex", flexDirection: "row" }}>
            <TextField
              id="standard-select-currency"
              select
              label="Selecciona la moneda"
              value={currency}
              onChange={handleChange}
              color="error"
              variant="standard"
              sx={{ mt: "35px", width: "200px" }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <FormControl
              sx={{ mt: "35px", width: "170px", ml: "35px" }}
              variant="standard"
              color="error"
            >
              <InputLabel htmlFor="standard-adornment-amount">
                Cantidad
              </InputLabel>
              <Input
                id="standard-adornment-amount"
                onChange={handleChangeAmount("amount")}
                startAdornment={
                  <InputAdornment position="start">{currency}</InputAdornment>
                }
              />
            </FormControl>
          </Box>
        </Box>
        <Box>
          <FormControlLabel
            value="end"
            control={<Checkbox color="error" />}
            label="Apto Crédito"
            labelPlacement="end"
            onChange={handleChangeCheckbox}
            sx={{ mt: "35px" }}
          />
        </Box>
        <Box>
          <Typography sx={{ fontSize: "24px", display: "block", mt: "35px" }}>
            <b>Describe la propiedad</b>
          </Typography>
          <Typography sx={{ mt: "24px", mb: "20px" }}>
            Asegúrate de incluir el tipo de propiedad y el tipo de tu aviso.
          </Typography>
        </Box>
        <Box>
          <Typography>
            <b>Titulo</b>
          </Typography>
          <TextField
            variant="outlined"
            sx={{ mt: "20px", width:'28%' }}
            color="error"
            placeholder='Completá el título de tu aviso'
          ></TextField>
        </Box>
        <Box>
          {" "}
          <Typography>
            <b>Descripción</b>
          </Typography>
          <Box sx={{display:'flex', flexDirection:'row'}}>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            placeholder='Escribe un mínimo de 150 caracteres'
            sx={{ mt: "20px", width:'28%' }}
            color='error'
            inputProps={{ minLength: 150 }}
            onChange={e => SetCountCharacter(e.target.value.length)}
          />
          <Box sx={{display:'flex',alignItems:'end', ml:'10px'}}>{countCharacter}</Box>
          </Box>
          
        </Box>
        
      </Stack>

      <ProgressButtons />
    </div>
  );
};

export default ThirdStep;
