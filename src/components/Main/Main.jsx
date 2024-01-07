import React from "react";
import { NewsList } from "../NewsList/NewsList.jsx";
import { Sidebar } from "../SideBar/Sidebar.jsx";
import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteActive } from "../../redux/features/popap/popupSlice";

export const Main = () => {
  const dispatch = useDispatch();
  const deletePopup = () => {
    dispatch(deleteActive());
  };
  return (
    <Box sx={{ marginTop: "50px", padding: "0 20px" }} onClick={deletePopup}>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", marginBottom: "50px" }}
      >
        News+language
      </Typography>
      <Box sx={{display:"flex", gap:" 10px"}}>
        <NewsList></NewsList>
        <Sidebar></Sidebar>
      </Box>
    </Box>
  );
};
