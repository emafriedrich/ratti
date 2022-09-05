import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useState } from "react";
import { IconButton } from "@mui/material";
import ArrowCircleUpTwoToneIcon from "@mui/icons-material/ArrowCircleUpTwoTone";
import ArrowCircleDownTwoToneIcon from "@mui/icons-material/ArrowCircleDownTwoTone";
import { Box } from "@mui/material";
import HomeWorkTwoToneIcon from "@mui/icons-material/HomeWorkTwoTone";
import WallpaperTwoToneIcon from "@mui/icons-material/WallpaperTwoTone";
import ProgressButtons from "./button";

const ThirdStep = () => {
  console.log('paso3')
  return (
    <div>
      
      <Stack direction="column" spacing={3} sx={{ mb: "50px" }}>
      <Box style={{marginTop:'50px', marginBottom:'15px'}}><span style={{fontSize:'24px'  }}>Características Principales</span></Box>
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
        <Box sx={{ width: "50%"}}>
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


        <Box style={{marginTop:'50px'}}><span ><bold style={{fontSize:'24px'  }}>Superficies</bold></span></Box>
        <Box sx={{ width: "50%" }}>
          
          <IconButton>
            <HomeWorkTwoToneIcon></HomeWorkTwoToneIcon>
          </IconButton>
          <TextField
            label="Superficie Cubierta"
            size="small"
            inputProps={{
              step: 1,
              min: 0,
              max: 9,
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
              min: 0,
              max: 9,
              type: "number",
            }}
            sx={{ width: "140px" }}
            variant="standard"
            placeholder="m2"
          />
        </Box>
      </Stack>
      
      <ProgressButtons /> 
    </div>
  );
};

export default ThirdStep;
