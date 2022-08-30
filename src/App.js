import { Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'

import Content from './components/Content'
import Footer from './components/Footer'
import IframeDisplay from './components/IframeDisplay'
import ResponsiveAppBar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <div>
      <ResponsiveAppBar />
      <Content />
      <Footer />

    </div>
  )
}

export default App