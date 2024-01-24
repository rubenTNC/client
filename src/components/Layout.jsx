import React from "react";
import { Navbar } from "./Navbar/Navbar";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteActive } from "../redux/features/popap/popupSlice";

export const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const activ = useSelector((state) => state.popup.activ);

  const handleToggle = () => {
    dispatch(deleteActive());
  };
  return (
    <React.Fragment>
      <Box>
      <Navbar />
        <div className="bg-color" onClick={handleToggle}>
          <Box sx={{ paddingTop: "56px", marginTop:"50px" }}>
            <div className="container">
              {children}
            </div>
          </Box>
        </div>
      </Box>
    </React.Fragment>
  );
};
