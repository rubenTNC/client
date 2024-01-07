import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const status = useSelector((state) => state.auth.status);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();





  const handleSubmit = async () => {
    dispatch(loginUser({ username, password }));
    setUsername("");
    setPassword("");
  };

  useEffect(() => {
    if (status) {
      toast(status);
    }
    if (user) {
      navigate("/");
    }
  }, [status, user]);


  return (
    <Container
      sx={{ mt: "50px", height: "100vh" }}
      component="main"
      maxWidth="xs"
    >
      <CssBaseline />
      <div>
        <Box sx={{ textAlign: "center" }}>
          <MeetingRoomIcon
            sx={{ fontSize: "100px", textAlign: "center" }}
          ></MeetingRoomIcon>
        </Box>
        <Typography sx={{ textAlign: "center" }} component="h1" variant="h5">
          Вход
        </Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Логин"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <Button
            variant="contained"
            sx={{
              display: "block",
              minHeight: "45px",
              mt: "20px",
              fontSize: "20px",
              width: "100%",
            }}
            onClick={handleSubmit}
          >
            Войти
          </Button>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Запомнить меня"
          />

          <Grid container>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Еще нет аккауна? Регистрация"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
