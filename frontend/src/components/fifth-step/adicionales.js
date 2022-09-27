import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import { Box } from "@mui/system";

const Adicionales = ({ extraGroup }) => {
  return <Box>
    <Box>
      <Typography
        sx={{ fontSize: "24px", display: "block", mt: "70px", mb: "20px" }}
      >
        <b>{extraGroup.title}</b>
      </Typography>
    </Box>



    <Box sx={{ display: "flex", flexDirection: "row", width: "100%", mt: 5 }}>
      <Typography sx={{ width: '50%' }}><b>{extraGroup.extras[0].name}</b></Typography>
      <Typography sx={{ width: '40%' }}><b>{extraGroup.extras[1].name}</b></Typography>
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
          {
            JSON.parse(extraGroup.extras[0].posible_values).map(value => {
              return <MenuItem value={value} sx={{ textAlign: "center" }}>
                { value }
              </MenuItem>
            })
          }
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
          {
            JSON.parse(extraGroup.extras[1].posible_values).map(value => {
              return <MenuItem value={value} sx={{ textAlign: "center" }}>
                { value }
              </MenuItem>
            })
          }
        </Select>
      </FormControl>
    </Box>
    <Box sx={{ display: "flex", flexDirection: "row", width: "100%", mt: 5 }}>
      <Typography sx={{ width: '50%' }}><b>{extraGroup.extras[2].name}</b></Typography>
      <Typography sx={{ width: '40%' }}><b>{extraGroup.extras[3].name}</b></Typography>
    </Box>

    <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
      <FormControl color="error" sx={{ width: "100%" }}>
        <InputLabel id='input-label_3' sx={{ mt: 4 }}>selecciona una opcion</InputLabel>
        <Select
          select
          sx={{ width: "80%", mt: 4, borderRadius: "10px" }}
          color="error"
          labelId="input-label_3"
          label='selecciona una opcion'
        >
           {
            JSON.parse(extraGroup.extras[2].posible_values).map(value => {
              return <MenuItem value={value} sx={{ textAlign: "center" }}>
                { value }
              </MenuItem>
            })
          }
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
           {
            JSON.parse(extraGroup.extras[3].posible_values).map(value => {
              return <MenuItem value={value} sx={{ textAlign: "center" }}>
                { value }
              </MenuItem>
            })
          }
        </Select>

      </FormControl>
    </Box>
    <Box sx={{ display: "flex", flexDirection: "row", width: "100%", mt: 5 }}>
      <Typography sx={{ width: '50%' }}><b>{extraGroup.extras[4].name}</b></Typography>
      <Typography sx={{ width: '40%' }}><b>{extraGroup.extras[5].name}</b></Typography>
    </Box>
    <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
      <FormControl color="error" sx={{ width: "100%" }}>
        <InputLabel id='input-label_5' sx={{ mt: 4 }}>selecciona una opcion</InputLabel>
        <Select
          select
          sx={{ width: "80%", mt: 4, borderRadius: "10px" }}
          color="error"
          label='Selecciona una opción'
          labelid='input-label_5'
        >
          {
            JSON.parse(extraGroup.extras[4].posible_values).map(value => {
              return <MenuItem value={value} sx={{ textAlign: "center" }}>
                { value }
              </MenuItem>
            })
          }
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
    <Box sx={{ display: "flex", flexDirection: "row", width: "100%", mt: 5 }}>
      <Typography sx={{ width: '50%' }}><b>{extraGroup.extras[6].name}</b></Typography>
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
};

export default Adicionales;