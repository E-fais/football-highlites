import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "../App.css";

function IframeDisplay({ displayLink, title,setVideo }) {
  return (
    <div className="iframe">
        
      <Typography margin={1}
       fontWeight={700} 
       color='error'
       sx={{color:'white'}}
       variant="h5">
        {title}
      </Typography>
      <Button
     sx={{marginBottom:'1rem'}}
        variant='contained'
        onClick={()=>setVideo('')}
         color='error'
        size='large'
        >Close Highlites</Button>
    
      <iframe marginBottom='3rem'  width='90%' height="750px" src={displayLink} />
      
    </div>
  );
}

export default IframeDisplay;
