import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getNewsAll } from '../../redux/features/news/newsSlice';
import { Box, Typography, ImageListItem } from '@mui/material';


export const News = ({props}) => {
  return (
    <Box sx={{display: "flex", justifyContent: "space-between"}} >
      <Typography sx={{fontSize:"23px", lineHeight:"30px"}}>{props.title}</Typography>
      <ImageListItem sx={{maxWidth:"25%", marginLeft:"20px"}} >
      <img
        src={props.img}
        alt={props.title}
        loading="lazy"
      />
    </ImageListItem>

    </Box>
    )
}
