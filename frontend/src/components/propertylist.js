import { Box, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import Checkbox from "@mui/material/Checkbox";

const Propertylist = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}
    >
      <Box
        sx={{
          height: "200px",
          borderRadius: "20px",
          border: "2px solid red",
          marginTop: "50px",
          display: "flex",
          flexDirection: "row",

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
            style={{ height: "200px", borderRadius: "20px" }}
          ></img>
        </Box>
        <Box sx={{ height: "80px", marginRight: "50px", marginLeft: "5%" }}>
          <Box sx={{ marginTop: "10px" }}>
            <span
              fontWeight={500}
              style={{ fontSize: "15px", color: "#8A8181" }}
            >
              Departamento
            </span>
          </Box>
          <Box sx={{ marginTop: "40px" }}>
            <span style={{ fontSize: "20px" }}>
              Departamento grande en Posadas
            </span>
          </Box>
          <Box sx={{ marginTop: "24px" }}>
            <span
              fontWeight={500}
              style={{ fontSize: "15px", color: "#8A8181" }}
            >
              Leandro N. Alem
            </span>
          </Box>
          <Box sx={{ marginTop: "24px" }}>
            <span
              fontWeight={500}
              style={{ fontSize: "15px", color: "#8A8181" }}
            >
              Venta
            </span>
            <span style={{ fontSize: "20px", marginLeft: "30px" }}>
              USD 200000
            </span>
          </Box>

          <Box></Box>
        </Box>
        <Box sx={{ height: "80px", display: "flex", flexDirection: "row" }}>
          <Box>
            <Box>
              <span fontWeight={500} style={{ fontSize: "20px" }}>
                Id
              </span>
            </Box>
            <Box>
              <span style={{ color: "#8A8181", fontSize: "15px" }}>546123</span>
            </Box>
          </Box>
        </Box>
        <Divider orientation="vertical" light flexItem sx={{ width: "10px" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "40%",
            height: "120px",
            flexWrap:'wrap'
          }}
        >
          <Box
            sx={{
              height: "100px",
              width: "20%",
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
              height: "100px",
              width: "20%",
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
              height: "100px",
              width: "20%",
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
       
      </Box>
    </div>
  );
};

export default Propertylist;
