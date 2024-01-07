import React from 'react'
import {styles} from "./sidebar.modules.css"
import { Box, Typography } from '@mui/material'

export const Sidebar = () => {
  return (
    <Box sx={{display: {xs:"none", sm: "block"}}}>
      <Typography sx={{margin: "0 auto"}} variant='h5'>Language</Typography>
    </Box>
  )
}
