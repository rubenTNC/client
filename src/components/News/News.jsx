import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getNewsAll } from '../../redux/features/news/newsSlice';
import { Box, Typography, ImageListItem } from '@mui/material';


export const News = ({props}) => {
  return (
    <Box sx={{display: "flex", justifyContent: "space-between", border:"1px solid black", padding:"10px 15px", borderRadius:"5px"}} >
      <Typography sx={{fontSize:{lg:"23px", sm:"18px", xs:"14px"}, }}>{props.title}</Typography>
      <ImageListItem sx={{maxWidth:"25%", minWidth:"120px", marginLeft:"20px"}} >
      <img
        src={props.img}
        alt={props.title}
        loading="lazy"
      />
    </ImageListItem>

    </Box>
    )
}
