import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export function Navbar() {
  const isUser = useSelector((state) => state.auth.user)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ borderRadius: {sm: "9px"} }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <NavLink to={"/"} href="/">
              News+language
            </NavLink>
          </Typography>
          <Search sx={{ mr: "100px" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          {isUser ? (
            <Box sx={{display:"flex", gap:"30px"}}>
              <Typography variant="h6">
                <div className="autch">
                  <Link to={"/register"}>{isUser.username}</Link>{" "}
                </div>
              </Typography>
              <Button
              variant="contained"
              sx={{ background: "white", color: "black", fontWeight: "bold" }}
            >
              Выйти
            </Button>
            </Box>
          ) : (
            <Box sx={{display: "flex", gap: "30px"}}>
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
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}


