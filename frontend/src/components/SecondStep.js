import React from "react";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import ProgressButtons from "./button";

import { useFormik } from 'formik';
import { useRecoilState } from "recoil";
import { postAtom } from "../state/atoms/posts";

const validate = (values) => {
  const errors = {};
  if (!values.address || values.address.length < 5) {
    errors.address = 'La direccion es requerida';
  }
  if (!values.province) {
    errors.province = 'Lo provincia es requerida';
  }
  if (!values.city) {
    errors.city = 'La ciudad es requerida';
  }
  return errors;
};

const SecondStep = () => {
  const [post, setPost] = useRecoilState(postAtom);
  const formik = useFormik({
    initialValues: {
      address: post.address,
      province: post.province || 'Misiones',
      city: post.city || 'Posadas',
      neighborhood: post.neighborhood,
    },
    validate,
  });
  const handleProgress = () => {
    setPost({
      ...post,
      address: formik.values.address,
      province: formik.values.province,
      city: formik.values.city,
      neighborhood: formik.values.neighborhood,
    });
  };

  return (
    <div>
      <h2>Ingresa la ubicacion de la propiedad</h2>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          ml: 4,
          mt: 8,
        }}
      >
        <Typography sx={{ width: "50%" }}>
          <b>Ingresa calle y altura</b>
        </Typography>
      </Box>
      <FormControl sx={{ mb: 2, minWidth: 120, width: "80%" }} direction="row">
        <Stack direction="row" sx={{ width: "100%" }}>
          <TextField
            fullWidth
            label=""
            TextField
            value={formik.values.address}
            sx={{ m: 4 }}
            color="error"
            id="address"
            name="address"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          ></TextField>
          {formik.errors.address ? <div>{formik.errors.address}</div> : null}
        </Stack>
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%", mt: 5, ml: 4 }}>
          <Typography sx={{ width: '50%' }}><b>Provincia</b></Typography>
          <Typography sx={{ width: '40%' }}><b>Ciudad</b></Typography>
        </Box>
        <Stack direction="row" sx={{ width: "100%" }}>
          <TextField
            name="province"
            onChange={formik.handleChange}
            TextField
            sx={{ m: 4, width: "50%" }}
            color="error"
            value={formik.values.province}
          ></TextField>
          {formik.errors.province ? <div>{formik.errors.province}</div> : null}

          <TextField
            onChange={formik.handleChange}
            TextField
            name="city"
            sx={{ m: 4, width: "50%" }}
            color="error"
            value={formik.values.city}
          ></TextField>
        </Stack>
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%", mt: 5, ml: 4 }}>
          <Typography sx={{ width: '50%' }}><b>Barrio</b></Typography>
        </Box>
        <Stack direction="row" sx={{ width: "100%" }}>
          <TextField
            TextField
            onChange={formik.handleChange}
            sx={{ m: 4, width: "50%" }}
            color="error"
            name="neighborhood"
            value={formik.values.neighborhood}
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
          <ProgressButtons disableProgress={!formik.isValid || !formik.values.address || !formik.values.city || !formik.values.province} onChange={handleProgress} />
        </Stack>
      </Box>
    </div>
  );
};

export default SecondStep;
