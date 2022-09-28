import { Box, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import "./test.png";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { fontFamily, fontWeight } from "@mui/system";

const Propertylist = () => {
  return (
    <div>
      <Box
        sx={{
          width: "80%",
          height: "500px",
          borderRadius: "20px",
          border: "2px solid red",
          marginLeft: "10%",
          marginTop: "50px",
          display:'flex',
          flexDirection:'row'
        }}
      >
        <Box sx={{height:'100%',width:'200px', paddding:'50px'}}>
          <img src="test.png" alt="item"></img>
          <ArrowLeftIcon></ArrowLeftIcon>
          <ArrowRightIcon></ArrowRightIcon>
        </Box>
        <Box sx={{height:'80px', marginRight:'50px'}}>
            <Box><span fontWeight={500} style={{fontSize:'25px'}} >USD 180000</span></Box>
            <Box><span style={{color:'#8A8181', fontSize:'15px'}}>21697 Expensas</span></Box>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Box></Box>
        </Box>
        <Box sx={{height:'80px', display:'flex', flexDirection:'row'}}>
            <Box><Box><span fontWeight={500} style={{fontSize:'25px'}} >Andres Lamas 1800</span></Box>
            <Box><span style={{color:'#8A8181', fontSize:'15px'}}>Villa General Mitre, Capital Federal</span></Box></Box>
            
          
        </Box>
        <Divider orientation="vertical" light flexItem sx={{ width:'10px', }} />
            <Box sx={{marginLeft:'55%',justifyContent:'end',borderRadius:'25px',width:'10%', height:'50px', border:'1px solid #C41616' ,justifyContent:'end'}}><Typography align="center" sx={{marginTop:'10px'}}>Destacado</Typography></Box>
      </Box>
    </div>
  );
};

export default Propertylist;
