import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import ProgressButtons from "./button";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import fakeSpectData from "../fixtures/features.json";

let unidGroups = fakeSpectData.reduce((uniqueGroups, actual) => {
  if (!uniqueGroups.includes(actual.feature_group))
    uniqueGroups.push(actual.feature_group);
  return uniqueGroups;
}, []);

let grupedFeatures = [];

for (const group of unidGroups) {
  const items = fakeSpectData.reduce((groupedItems, actual) => {
    if (actual.feature_group === group) groupedItems.push(actual.feature);
    return groupedItems;
  }, []);

  grupedFeatures.push({ group, items });
}
console.log(grupedFeatures);

const FifthStep = () => {
  const [expanded, setExpanded] = React.useState(false);


  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const Acordions = () => {
    return grupedFeatures.map((group) => {
      return (
        <Accordion
          elevation={0}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          color="error"
          
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
         
          >
            <Typography sx={{ width: "20%", flexShrink: 0 }}>
              <span style={{ fontSize: "22px", display: "block", mt: "35px" }}>
                <b>{group.group}</b>
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {group.items.map((item) => (
              <FormControlLabel

                value="end"
                control={<Checkbox color="error" sx={{marginRight:'20px'}} />}
                label={item}
                labelPlacement="end"
                sx={{ mt: "35px",width:'30%' }}
              />
            ))}
          </AccordionDetails>
        </Accordion>
      );
    });
  };

  return (
    <Box>
    <Stack
      direction="column"
      spacing={3}
      sx={{ mb: "50px", padding: "50px", ml: "10%", width: "60%" }}
    >
      <Typography
        sx={{ fontSize: "24px", display: "block", mt: "35px", mb: "20px" }}
      >
        <b>
          Estos campos son opcionales y mejoran el posicionamiento del anuncio
        </b>
      </Typography>
      <Typography sx={{ mt: "24px" }}>
        Buscá y agregá características.
      </Typography>
      <Box>
        <TextField
          variant="outlined"
          sx={{ width: "100%", mb: "60px" }}
          color="error"
          placeholder="Ej. uso comercial"
        ></TextField>

        <Box>
          <Acordions />
        </Box>
        <Box>
          <Typography
            sx={{ fontSize: "24px", display: "block", mt: "70px", mb: "20px" }}
          >
            <b>Adicionales</b>
          </Typography>
        </Box>



        <Box sx={{ display: "flex", flexDirection: "row", width: "100%", mt:5 }}>
        <Typography sx={{width:'50%'}}><b>Cantidad de Plantas</b></Typography>
        <Typography sx={{width:'40%'}}><b>Cobertura Cochera</b></Typography>     
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>

          <FormControl color="error" sx={{ width: "100%" }}>
            <InputLabel id='input-label' sx={{ mt: 4 }}>selecciona una opcion</InputLabel>

            <Select
              select
              sx={{ width: "80%", mt: 4, borderRadius: "10px" }}
              color="error"
              label="selecciona una opcion"
              labelId="input-label"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="1" sx={{ textAlign: "center" }}>
                1
              </MenuItem>
              <MenuItem value="2" sx={{ textAlign: "center" }}>
                2
              </MenuItem>
              <MenuItem value="3">
                3
              </MenuItem>
              <MenuItem value="4">
                4
              </MenuItem>
              <MenuItem value=">5">
                5 o más
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl color="error" sx={{ width: "100%" }}>
            <InputLabel id='input-label_2' sx={{ mt: 4 }}>selecciona una opcion</InputLabel>
            <Select
              select
              sx={{ width: "80%", mt: 4, borderRadius: "10px" }}
              color="error"
              labelId="input-label_2"
              label="selecciona una opcion"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="newbuilding" sx={{ textAlign: "center" }}>
                
              </MenuItem>
              <MenuItem value="oldBuilding" sx={{ textAlign: "center" }}>
                Cubierta
              </MenuItem>
              <MenuItem value="inconstructionBuilding">
                Semicubierta
              </MenuItem>
              <MenuItem value="inconstructionBuilding">
                Descubierta
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%" , mt:5 }}>
        <Typography sx={{width:'50%'}}><b>Disposición</b></Typography>
        <Typography sx={{width:'40%'}}><b>Luminosidad</b></Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "row", width: "100%"}}>
          <FormControl color="error" sx={{ width: "100%" }}>
            <InputLabel id='input-label_3' sx={{ mt: 4 }}>selecciona una opcion</InputLabel>
            <Select
              select
              sx={{ width: "80%", mt: 4, borderRadius: "10px" }}
              color="error"
              labelId="input-label_3"
              label='selecciona una opcion'
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="newbuilding" sx={{ textAlign: "center" }}>
                Frente
              </MenuItem>
              <MenuItem value="oldBuilding" sx={{ textAlign: "center" }}>
                Contrafrente
              </MenuItem>
              <MenuItem value="inconstructionBuilding">
                Interno
              </MenuItem>
              <MenuItem value="inconstructionBuilding">
                Lateral
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl id='input-label_4' color="error" sx={{ width: "100%" }}>
          <InputLabel id='input-label_4' sx={{ mt: 4 }}>selecciona una opcion</InputLabel>
          <Select
              select
              sx={{ width: "80%", mt: 4, borderRadius: "10px" }}
              color="error"
              label='Selecciona una opción'
              labelid='input-label_4'
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="newbuilding" sx={{ textAlign: "center" }}>
                Muy luminoso
              </MenuItem>
              <MenuItem value="oldBuilding" sx={{ textAlign: "center" }}>
                Luminoso
              </MenuItem>
              <MenuItem value="inconstructionBuilding">
               Poco luminoso
              </MenuItem>
            </Select>
           
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%" , mt:5 }}>
        <Typography sx={{width:'50%'}}><b>Orientación</b></Typography>
        <Typography sx={{width:'40%'}}><b>Cantidad de pisos en el edificio</b></Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%"}}>
          <FormControl color="error" sx={{ width: "100%" }}>
            <InputLabel id='input-label_5' sx={{ mt: 4 }}>selecciona una opcion</InputLabel>
            <Select
              select
              sx={{ width: "80%", mt: 4, borderRadius: "10px" }}
              color="error"
              label='Selecciona una opción'
              labelid='input-label_5'
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="newbuilding" sx={{ textAlign: "center" }}>
                N
              </MenuItem>
              <MenuItem value="oldBuilding" sx={{ textAlign: "center" }}>
                S
              </MenuItem>
              <MenuItem value="inconstructionBuilding">
                E
              </MenuItem>
              <MenuItem value="inconstructionBuilding">
                O
              </MenuItem>
              <MenuItem value="inconstructionBuilding">
                 NE
              </MenuItem>
              <MenuItem value="inconstructionBuilding">
                NO
              </MenuItem>
              <MenuItem value="inconstructionBuilding">
                SE
              </MenuItem>
              <MenuItem value="inconstructionBuilding">
                SO
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl color="error" sx={{ width: "100%" }}>
           
   
            <TextField
          variant="outlined"
          sx={{ width: "80%", mt: 4, borderRadius: "10px" }}
          color="error"
          placeholder="Ej. uso comercial"
          type='number'
        ></TextField>
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%" , mt:5 }}>
        <Typography sx={{width:'50%'}}><b>Departamentos por pisos</b></Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <TextField
          variant="outlined"
          sx={{ width: "40%", mt: 4, borderRadius: "10px" }}
          color="error"
          placeholder="Ej. uso comercial"
          type='number'
        ></TextField>
        </Box>
 
      </Box>
      
    </Stack>
    <Stack sx={{justifyContent:'end'}}>
        <ProgressButtons />
        </Stack>
    </Box>
  );
};

export default FifthStep;
