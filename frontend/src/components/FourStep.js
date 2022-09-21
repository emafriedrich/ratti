import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import ProgressButtons from "./button";
import { Button, Paper, Typography } from "@mui/material";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { Box } from "@mui/system";
import "./fourstep.css";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

const FourStep = () => {
  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  console.log("paso4");
  return (
    <div>
      <Box>
        <Typography sx={{ fontSize: "24px" }}>
          <b>Sube fotos de la propiedad</b>
        </Typography>
        <Box>
          <Typography sx={{ color: "#858484", mt: "30px" }}>
            Cargá entre 5 y 50 fotos. Una vez cargadas, arrastrá y soltá para
            cambiarlas de orden.Se admiten los formatos jpg, jpeg y png desde
            500 x 500px hasta 6000 x 6000px.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <ButtonUnstyled
          component="label"
          className="box-image"
          sx={{ textDecoration: "none" }}
        >
          <input type="file" multiple onChange={onImageChange} hidden />
          <CloudUploadRoundedIcon sx={{ fontSize: 40 }} color="error" />
          <Typography
            sx={{ fontWeight: "bold", textAlign: "center", fontSize: "14px" }}
          >
            Arrastrá o agregá las fotos de la Propiedad
          </Typography>
        </ButtonUnstyled>
        <image src={image} alt="preview image" />
        <Paper elevation={1} sx={{ display: "flex" ,ml:'15%'}} className='advise-style'>
          <TipsAndUpdatesIcon color="error" fontSize="large" sx={{height:'200px', mr:'20px'}} />
          <Typography sx={{ color: "#858484" ,fontSize:'14px', alignSelf:'center'}}>
            Para que tu inmueble tenga más visitas, te recomendamos cargar fotos
            nítidas y bien iluminadas. Evitá incluir bordes, logos, marcas de
            agua o textos promocionales.
          </Typography>
        </Paper>
      </Box>


      <Box>
        <Typography sx={{ fontSize: "24px", mt:'100px' }}>
          <b>Planos(Opcional)</b>
        </Typography>
        <Box>
          <Typography sx={{ color: "#858484", mt: "30px" }}>
          Cargá los planos de la propiedad. Una vez cargados, arrastrá y soltá para cambiarlos de orden. Se admiten los formatos jpg, jpeg y png desde 500 x 500 px hasta 6000 x 6000 px.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <ButtonUnstyled
          component="label"
          className="box-image_2"
          sx={{ textDecoration: "none" }}
        >
          <input type="file" multiple onChange={onImageChange} hidden />
          <CloudUploadRoundedIcon sx={{ fontSize: 40 }} color="error" />
          <Typography
            sx={{ fontWeight: "bold", textAlign: "center", fontSize: "14px" }}
          >
            Arrastrá o agregá los planos de la Propiedad
          </Typography>
        </ButtonUnstyled>
        <image src={image} alt="preview image" />
        
      </Box>
      



      <Stack spacing={2} direction="row" sx={{justifyContent:'end'}}>
        <ProgressButtons/>
      </Stack>
    </div>
  );
};

export default FourStep;
