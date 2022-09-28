import { Box, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Propertylist = () => {
  return (
    <div>
      <Box
        sx={{
          height: "500px",
          borderRadius: "20px",
          border: "2px solid red",
          marginTop: "50px",
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <Box sx={{ height: '100%', width: '200px', paddding: '50px' }}>
          <img src="https://fakeimg.pl/300/" alt="item"></img>
          <ArrowLeftIcon></ArrowLeftIcon>
          <ArrowRightIcon></ArrowRightIcon>
        </Box>
        <Box sx={{ height: '80px', marginRight: '50px' }}>
          <Box><span fontWeight={500} style={{ fontSize: '25px' }} >USD 180000</span></Box>
          <Box><span style={{ color: '#8A8181', fontSize: '15px' }}>21697 Expensas</span></Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box></Box>
        </Box>
        <Box sx={{ height: '80px', display: 'flex', flexDirection: 'row' }}>
          <Box><Box><span fontWeight={500} style={{ fontSize: '25px' }} >Andres Lamas 1800</span></Box>
            <Box><span style={{ color: '#8A8181', fontSize: '15px' }}>Villa General Mitre, Capital Federal</span></Box></Box>

        </Box>
        <Divider orientation="vertical" light flexItem sx={{ width: '10px', }} />
      </Box>
    </div>
  );
};

export default Propertylist;
