import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import CssBaseline from "@mui/material/CssBaseline";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

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
  
  return (
    <Container sx={{ mt: "50px" }} component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Box sx={{ textAlign: "center" }}>
          <MeetingRoomIcon
            sx={{ fontSize: "100px", textAlign: "center"}}
          ></MeetingRoomIcon>
        </Box>
        <Typography sx={{ textAlign: "center" }} component="h1" variant="h5">
          Вход
        </Typography>
        <form noValidate >
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
            onInput={() => {
              console.log("dfgdfg")
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
          />
          <Button variant="contained" fullWidth="true" sx={{display:"block", minHeight:"45px", mt: "20px", fontSize: "20px"}}>Войти</Button>
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
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
