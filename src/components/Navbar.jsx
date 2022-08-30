
import { Typography } from '@mui/material'

import React from 'react'

function Navbar() {
  return (
    <div className='navbar'> 
       <Typography className='navTitle' 
       variant='h4'
       fontWeight={700}
       >
        <span className='tez'>Tez </span> Football
        </Typography>
    </div>
  )
}

export default Navbar