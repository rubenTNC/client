import React from "react";
import {styles} from "./main.modules.css"
import { NewsList } from "../NewsList/NewsList.jsx";
import { Sidebar } from "../SideBar/Sidebar.jsx";
import { Box, Typography } from "@mui/material"; 

export const Main = () => {
  return (
    <Box sx={{marginTop:"50px", padding:"0 20px"}}>
      <Typography variant="h3" sx={{textAlign:"center", marginBottom: "50px"}}>News+language</Typography>
      <div className="main__body">
        <NewsList></NewsList>
        <Sidebar></Sidebar>
      </div>
    </Box>
    
  );
};
