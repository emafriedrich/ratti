import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import ProgressButtons from "./button";
import { Paper, Typography } from "@mui/material";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { Box } from "@mui/system";
import "./fourstep.css";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import ImageUploading from "react-images-uploading";
import { useRecoilState } from "recoil";
import { postAtom } from "../state/atoms/posts";
import { saveImage } from "../api/images";

const MIN_IMAGES = 5;

const FourStep = () => {
  const [uploadingImages, setUploadingImages] = useState(false);
  const [post, setPost] = useRecoilState(postAtom);

  const [images, setImages] = React.useState(post.images || []);
  const [plans, setPlans] = React.useState(post.plans || []);


  const onImageChange = async (imageList, addUpdateIndex) => {
    setUploadingImages(true);
    if (addUpdateIndex?.length > 0) {
      for (const index of addUpdateIndex) {
        const image = imageList[index];
        const path = await saveImage(image.file);
        image.serverPath = path;
      }
    }
    setUploadingImages(false);
    setImages(imageList);
  };
  const onPlansChange = (plansList) => {
    setPlans(plansList);
  };

  const saveImages = () => {
    setPost({ ...post, images, plans: plans })
  }

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
        <ImageUploading
          multiple
          value={images}
          onChange={onImageChange}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <div className="upload__image-wrapper">
              <ButtonUnstyled
                component="label"
                className="box-image"
                sx={{ textDecoration: "none" }}
                onClick={onImageUpload}
                {...dragProps}
              >
                <CloudUploadRoundedIcon sx={{ fontSize: 40 }} color="error" />
                <Typography
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: "14px",
                  }}
                >
                  Arrastrá o agregá las fotos de la Propiedad
                </Typography>
              </ButtonUnstyled>
              {imageList.map((image, index) => (
                <div
                  key={index}
                  className="box-image_preview"
                  style={{ backgroundImage: "url('" + image.data_url + "')" }}
                >
                  <div className="image-item__btn-wrapper">
                    <div className="image-remove_item">
                      <button onClick={onImageRemove} className="button-remove">
                        Quitar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>

        <image src={images} alt="preview image" />
        <Paper elevation={1} sx={{ display: "flex" }} className="advise-style">
          <TipsAndUpdatesIcon
            color="error"
            fontSize="large"
            sx={{ height: "200px", mr: "20px" }}
          />
          <Typography
            sx={{ color: "#858484", fontSize: "14px", alignSelf: "center" }}
          >
            Para que tu inmueble tenga más visitas, te recomendamos cargar fotos
            nítidas y bien iluminadas. Evitá incluir bordes, logos, marcas de
            agua o textos promocionales.
          </Typography>
        </Paper>
      </Box>

      <Box>
        <Typography sx={{ fontSize: "24px", mt: "100px" }}>
          <b>Planos(Opcional)</b>
        </Typography>
        <Box>
          <Typography sx={{ color: "#858484", mt: "30px" }}>
            Cargá los planos de la propiedad. Una vez cargados, arrastrá y soltá
            para cambiarlos de orden. Se admiten los formatos jpg, jpeg y png
            desde 500 x 500 px hasta 6000 x 6000 px.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <ImageUploading
          multiple
          value={plans}
          onChange={onPlansChange}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <div className="upload__image-wrapper">
              <ButtonUnstyled
                component="label"
                className="box-image_2"
                sx={{ textDecoration: "none" }}
                onClick={onImageUpload}
                {...dragProps}
              >
                <CloudUploadRoundedIcon sx={{ fontSize: 40 }} color="error" />
                <Typography
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: "14px",
                  }}
                >
                  Arrastrá o agregá los planos de la Propiedad
                </Typography>
              </ButtonUnstyled>
              {imageList.map((image, index) => (
                <div
                  key={index}
                  className="box-image_preview"
                  style={{ backgroundImage: "url('" + image.data_url + "')" }}
                >
                  <div className="image-remove_item">
                    <button onClick={onImageRemove} className="button-remove">
                      Quitar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>

        <image src={images} alt="preview image" />
      </Box>

      <Stack spacing={2} direction="row" sx={{ justifyContent: "end" }}>
        <ProgressButtons disableProgress={uploadingImages || images.length < MIN_IMAGES} onChange={saveImages}/>
      </Stack>
    </div>
  );
};

export default FourStep;
