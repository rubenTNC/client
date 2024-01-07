import { Link, NavLink } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { Popap } from "../Popap/Popap";
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';

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
  const isUser = useSelector((state) => state.auth.user);
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "fixed",
        top: "0px",
        left: "0",
        right: "0",
        zIndex: 10,
      }}
    >
      <AppBar position="static" sx={{ borderRadius: { sm: "9px" } }}>
        <Toolbar sx={{}}>
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
          {
            isUser && <OnlinePredictionIcon sx={{marginRight:"20px"}}/>
          }
          <Search sx={{ mr: "20px", minWidth: "250px", ":focus": {scale: "1.1"} }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Popap />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
