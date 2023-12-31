import React from 'react'
import { Box, Typography, ImageListItem } from '@mui/material';
import { Link } from 'react-router-dom';


export const News = ({props}) => {
  return (
    <Box sx={{display: "flex",alignItems:"flex-start", justifyContent: "space-between", border:"1px solid black", padding:"10px 15px", borderRadius:"5px"}} >
      <Box>
      <Link to={`/${props._id}`}>
      <Typography sx={{fontSize:{lg:"23px", sm:"18px", xs:"14px"}, }}>{props.title}</Typography>
      </Link>
      <Box sx={{display:{sm:"flex", xs:"none"}, gap:"20px",flexWrap:"wrap",marginTop:"15px"}}>
        {
          props.tags?.map((tag) => (
            <Typography sx={{padding:"0px 5px", border:"1px solid black", borderRadius:"5px", cursor:"pointer"}}>{tag}</Typography>
          ))
        }
      </Box>
      <Typography sx={{marginTop:"20px", fontSize:"12px"}}>Дата {props.dateInfo}</Typography>

      </Box>
      <ImageListItem sx={{maxWidth:"25%", minWidth:"110px", marginLeft:"20px"}} >
      <img
        src={props.img}
        alt={props.title}
        loading="lazy"
      />
    </ImageListItem>

    </Box>
    )
}
