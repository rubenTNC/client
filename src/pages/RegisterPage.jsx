import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { registerUser } from "../redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'

export const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isUser = useSelector((state) => state.auth.user)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleSubmit = async () => {
    dispatch(registerUser({username, email, password}));
    setUsername("");
    setEmail("");
    setPassword("");
    navigate('/')
  };

  return (
    <Container sx={{ mt: "50px" }} component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Box sx={{ textAlign: "center" }}>
          <HowToRegIcon
            sx={{ fontSize: "100px", textAlign: "center" }}
          ></HowToRegIcon>
        </Box>
        <Typography sx={{ textAlign: "center" }} component="h1" variant="h5">
          Регистрация
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
            name="email"
            label="Email"
            type="email"
            id="email"
            value={email}
            autoComplete="email"
            onChange={(event) => {
              setEmail(event.target.value);
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
            value={password}
            autoComplete="current-password"
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
              width: "100%"
            }}
            onClick={handleSubmit}
          >
            Регистрация
          </Button>

          <Grid sx={{ mt: "20px" }} container>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Уже есть аккаунт? Войти!"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
