import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Propertylist = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}
    >
      <Box
        sx={{
          height: "160px",
          borderRadius: "20px",
          border: "1.5px solid #A10404",
          marginTop: "50px",
          display: "flex",
          flexDirection: "row",
          padding: "20px",
          width: "80%",
        }}
      >
        <Box sx={{ display: "flex", alignSelf: "center", marginRight: "15px" }}>
          <Checkbox size="large" color="error" />
        </Box>
        <Box sx={{ height: "100%", width: "200px", paddding: "50px" }}>
          <img
            src="https://fakeimg.pl/300/"
            alt="item"
            style={{ height: "150px", borderRadius: "20px" }}
          ></img>
        </Box>
        <Box sx={{ height: "80px", marginRight: "50px", marginLeft: "5%" }}>
          <Box >
            <span
              fontWeight={500}
              style={{ fontSize: "12px", color: "#8A8181" }}
            >
              Departamento
            </span>
          </Box>
          <Box sx={{ marginTop: "10px" }}>
            <span style={{ fontSize: "15px" }}>
              Departamento grande en Posadas
            </span>
          </Box>
          <Box sx={{ marginTop: "24px" }}>
            <span
              fontWeight={500}
              style={{ fontSize: "12px", color: "#8A8181" }}
            >
              Leandro N. Alem
            </span>
          </Box>
          <Box sx={{ marginTop: "14px" }}>
            <span
              fontWeight={500}
              style={{ fontSize: "12px", color: "#8A8181" }}
            >
              Venta
            </span>
            <span style={{ fontSize: "15px", marginLeft: "25px" }}>
              USD 200000
            </span>
          </Box>

          <Box></Box>
        </Box>
        <Box sx={{ height: "80px", display: "flex", flexDirection: "row" }}>
          <Box></Box>
        </Box>
        <Divider orientation="vertical" light flexItem sx={{ width: "10px" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            padding: "10px",
           
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "120px",
              
            }}
          >
            <Box
              sx={{
                height: "90px",
                width: "40%",
                border: "1px solid #676161",
                marginLeft: "40px",
                borderRadius: "15px",
                textAlign: "center",
                lineHeight: "45px",
              }}
            >
              <span>Visualizaciones</span>
              <Box sx={{ marginTop: "3px", fontSize: "25px" }}>45</Box>
            </Box>
            <Box
              sx={{
                height: "90px",
                width: "40%",
                border: "1px solid #676161",
                marginLeft: "40px",
                borderRadius: "15px",
                textAlign: "center",
                lineHeight: "45px",
              }}
            >
              <span>Exposición</span>
              <Box sx={{ marginTop: "3px", fontSize: "25px" }}>12</Box>
            </Box>
            <Box
              sx={{
                height: "90px",
                width: "40%",
                border: "1px solid #676161",
                marginLeft: "40px",
                borderRadius: "15px",
                textAlign: "center",
                lineHeight: "45px",
              }}
            >
              <span>Interesados</span>
              <Box sx={{ marginTop: "3px", fontSize: "25px" }}>20</Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "120px",
            }}
          >
            <Box
              sx={{
                height: "50px",
                width: "12%",
                marginTop: "30px",
                marginLeft: "40px",
                borderRadius: "15px",
                
                lineHeight: "45px",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  color: "#8A8181",
                  marginRight: "15px",
                }}
              >
                ID
              </span>
              <span style={{ fontWeight: "500", fontSize: "15px" }}>
                456451
              </span>
            </Box>
            
            <Box
              sx={{
                height: "50px",
                width: "58%",
                marginTop: "30px",
                marginLeft: "40px",
                borderRadius: "15px",
                
                lineHeight: "45px",
              }}
            >
              <span
                style={{
                  fontSize: "15px",
                  color: "#8A8181",
                  marginRight: "20px",
                }}
              >
                Creado el
              </span>
              <span style={{ fontWeight: "500", fontSize: "15px" }}>
                14/09/2022
              </span>
            </Box>
            <Box
              sx={{
                height: "50px",
                width: "58%",
                marginTop: "38px",
                marginLeft: "40px",
                borderRadius: "15px",
                textAlign:'end'
              }}
            >
              <EditIcon fontSize="large" color='error'/>
              <DeleteForeverIcon fontSize="large"color='error'/>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Propertylist;
