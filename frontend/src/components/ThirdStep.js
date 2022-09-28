import React from "react";
import Stack from "@mui/material/Stack";
import { FormControlLabel, TextField } from "@mui/material";
import { IconButton } from "@mui/material";
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
import { useRecoilState } from "recoil";
import { featuresAtom } from "../state/atoms/features";
import NumberFeature from "./third-step/number-input";
import SelectInput from "./third-step/select-input";

const ThirdStep = () => {
  const [ageBuilding, setAgeBuilding] = React.useState("");
  const [numberAgeHidden, setnumberAgeHidden] = React.useState("none");
  const handleAgeBuilding = (e) => {
    console.log('entra')
    setAgeBuilding(e.target.value);
    if (e.target.value === "Años de antiguedad") {
      handleNumberAgeHidden("");
    } else {
      setnumberAgeHidden("none");
    }
  };
  const handleNumberAgeHidden = (e) => {
    setnumberAgeHidden("flex");
  };

  const featureComponents = {
    'number': (feature) => <NumberFeature name={feature.name} />,
    'select': (feature, fg) => <SelectInput name={fg.title} feature={feature} handleAgeBuilding={handleAgeBuilding}></SelectInput>
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
  const [countCharacter, SetCountCharacter] = React.useState(0);

  const [checked, setChecked] = React.useState(true);

  const handleChangeCheckbox = (event) => {
    setChecked(event.target.checked);
  };

  const [featureGroups] = useRecoilState(featuresAtom);

  return (
    <div>
      <Stack
        direction="column"
        spacing={3}
        sx={{ mb: "50px", padding: "50px", ml: "10%",width:'50%' }}
      >
        {featureGroups.map(fg => {
          return <>
            <Box style={{ marginTop: "50px", marginBottom: "15px" }}>
              <Typography style={{ fontSize: "24px" }}>
                <b>{fg.title}</b>
              </Typography>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row',flexWrap:'wrap'}}>
            {
              fg.features.map(feature => {
                return <Box sx={{ width: "50%",marginTop:'20px' }}>
                  {
                    featureComponents[fg.featureValueType](feature, fg)
                  }
                  {
                    fg.featureValueType === 'select' && <Box
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
                  }
                </Box>
                
              })
            }
            </Box>
          </>
        })}
        <Box style={{ marginTop: "50px" }}>
          <Typography style={{ fontSize: "24px", display: "block" }}>
            <b>Precio</b>
          </Typography>
          <Box style={{ display: "flex", flexDirection: "row" }}>
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
                  <TextField
                    id="standard-select-currency"
                    select
                    value={currency}
                    onChange={handleChange}
                    color="error"
                    variant="standard"
                    
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.value + '  '}
                      </MenuItem>
                    ))}
                  </TextField>
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
        
      </Stack>
      <Stack direction="column"
        spacing={3}
        sx={{ mb: "50px", padding: "50px", ml: "10%" }}>
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
            sx={{ mt: "20px", width: "28%" }}
            color="error"
            placeholder="Completá el título de tu aviso"
          ></TextField>
        </Box>
        <Box>
          {" "}
          <Typography>
            <b>Descripción</b>
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              placeholder="Escribe un mínimo de 150 caracteres"
              sx={{ mt: "20px", width: "28%" }}
              color="error"
              inputProps={{ minLength: 150 }}
              onChange={(e) => SetCountCharacter(e.target.value.length)}
            />
            <Box sx={{ display: "flex", alignItems: "end", ml: "10px" }}>
              <span style={{ color: countCharacter >= 150 ? '' : 'red' }}>{countCharacter} / 150</span>
            </Box>
          </Box>
        </Box>
      </Stack>

      <ProgressButtons />
    </div>
  );
};

export default ThirdStep;
