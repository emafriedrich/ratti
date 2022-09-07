import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Paper, TextField } from "@mui/material";
import { useState } from "react";
import { IconButton } from "@mui/material";
import ArrowCircleUpTwoToneIcon from "@mui/icons-material/ArrowCircleUpTwoTone";
import ArrowCircleDownTwoToneIcon from "@mui/icons-material/ArrowCircleDownTwoTone";
import { Box } from "@mui/material";
import HomeWorkTwoToneIcon from "@mui/icons-material/HomeWorkTwoTone";
import WallpaperTwoToneIcon from "@mui/icons-material/WallpaperTwoTone";
import ProgressButtons from "./button";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { display } from "@mui/system";
import { Typography } from "@mui/material";

const ThirdStep = () => {
  const [ageBuilding, setAgeBuilding] = React.useState("");
  const [numberAgeHidden, setnumberAgeHidden] = React.useState("none");
  const handleAgeBuilding = (e) => {
    setAgeBuilding(e);
    if (e === 'oldBuilding') { handleNumberAgeHidden('')}
  };
  const handleNumberAgeHidden = (e) =>{
    setnumberAgeHidden('')
  } 

  return (
    <div>
      <Stack direction="column" spacing={3} sx={{ mb: "50px" }}>
        <Box style={{ marginTop: "50px", marginBottom: "15px" }}>
          <Typography style={{ fontSize: "24px" }}>Características Principales</Typography>
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
          
            <bold style={{ fontSize: "24px" }}>Superficies</bold>
          
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
        <Box style={{ marginTop:'50px' }}>
          <Typography style={{ fontSize: "24px", display: "block" }}>Antigüedad</Typography>
          <Select
            select
            sx={{ width: "300px", mt: 4 }}
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
            <MenuItem value="inconstructionBuilding">En construcción</MenuItem>
          </Select>
          <Paper sx={{ width: "140px", display:{...numberAgeHidden}}}>
          <TextField
          
            value={1}
            label="ageBuilding"
            size="small"
            inputProps={{

              type: "number",
            }}
            
            variant="standard"
          />
          </Paper>
        </Box>
      </Stack>

      <ProgressButtons />
    </div>
  );
};

export default ThirdStep;
