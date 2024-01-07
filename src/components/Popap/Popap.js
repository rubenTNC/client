import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleActive } from "../../redux/features/popap/popupSlice";
import CloseIcon from "@mui/icons-material/Close";
import { logout } from "../../redux/features/auth/authSlice";

export const Popap = () => {
  const dispatch = useDispatch();
  const activ = useSelector((state) => state.popup.activ);
  const user = useSelector((state) => state.auth.user);


  const city = JSON.parse(localStorage.getItem("position")).city

  const handleToggle = () => {
    dispatch(toggleActive());
  };

  const handleLogout = () => {
    dispatch(logout())
    handleToggle()
    localStorage.removeItem('token');
  }

  const notUserMenuItems = [
    {
      name: "Главная",
      url: "/",
    },
    {
      name: "Регистрация",
      url: "/register",
    },
    {
      name: "Войти",
      url: "/login",
    },
  ];

  const userMenuItems = [
    {
      name: user ? user.username : "",
      url: "/myPage"

    },
    {
      name: "Главная",
      url: "/",
    }
  ]

  const menuItems = user ? userMenuItems : notUserMenuItems

  const styleNotActive = {
    position: "absolute",
    top: "0px",
    left: "-200%",
    width: "100%",
    backgroundColor: "black",
    opacity: "0.8",
    zIndex: "1",
    transitionDuration: "1s",
    padding: "5px 10px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    gap: " 20px",
  };

  const styleActive = {
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "100%",
    backgroundColor: "black",
    opacity: "0.8",
    zIndex: "1",
    transitionDuration: "1s",
    padding: "5px 10px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    gap: " 20px",
  };

  const style = activ ? styleActive : styleNotActive;

  return (
    <Box >
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
      <Box sx={style}>
        <CloseIcon
          sx={{ position: "absolute", right: "30px", top: "10px" }}
          onClick={handleToggle}
        />
        {
          city && (
            <Typography variant="h6">{city}</Typography>
          )
        }
        {menuItems?.map((item) => (
          <Typography key={item.name} variant="h6" onClick={handleToggle}>
            <div className="autch">
              <Link to={item.url}>{item.name}</Link>{" "}
            </div>
          </Typography>
        ))}
        {
          user && (
            <Typography variant="h6" onClick={handleLogout} sx={{cursor: "pointer"}}>
              Выйти
            </Typography>
          )
        }
      </Box>
    </Box>
  );
};
