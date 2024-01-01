import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {toggleActive} from "../../redux/features/popap/popupSlice"
import { useEffect } from "react";

export const Popap = () => {
  const dispatch = useDispatch()
  const activ = useSelector((state) => state.popup.activ)

  const handleToggle = () => {
    dispatch(toggleActive())
  };
  useEffect(()=> {
    console.log(activ)
  },activ)

  return (
    <Box>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
        onClick={handleToggle}
      >
        <MenuIcon />
      </IconButton>
      {activ && (
        <Box>
          <Box
            sx={{
              position: "absolute",
              top: "55px",
              left: "0",
              right: "0",
              backgroundColor: "black",
              opacity:"0.8",
              zIndex:"1",
              transitionDuration:"1s",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            <Typography variant="h6">
              <div className="autch">
                <Link to={"/"}>Главная</Link>{" "}
              </div>
            </Typography>
            <Typography variant="h6">
              <div className="autch">
                <Link to={"/register"}>Регистрация</Link>{" "}
              </div>
            </Typography>
            <Typography variant="h6">
              <div className="autch">
                <Link to={"/login"}>Войти</Link>
              </div>
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};
