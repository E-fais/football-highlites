import React from "react";
import { Grid, Typography, Bo, Gridx } from "@mui/material";
import '../App.css'

function Header() {
  return (
    <div className="header">
      <Grid container
      borderBottom={'3px solid white'}
       alignItems={'center'}
       justifyContent='center'>
        
        <Grid 
         item xs={12} md={8}
        >
          <img  
          style={{width:'90%',height:"auto",borderRadius:'10px',border:'0px',margin:'19px'}}
          src="https://th.bing.com/th/id/R.df6b74f924017cc7dfb6a39d5cb39ca2?rik=Hnni4cSqrFCYMA&pid=ImgRaw&r=0" />
        </Grid>
        <Grid item xs={12} md={4}>
        <div class="typewriter">
  <h1>Latest Football <br/> Highlites,<br/>
  Match Summary &<br/>
  Statistics
  </h1>
</div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
