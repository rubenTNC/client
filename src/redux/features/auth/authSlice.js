import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: null,
  token: null,
  isLoading: false,
  status: null,
  eroors: null
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ username, email, password }) => {
    const user = {
      username,
      email,
      password,
    };
    const  data  = await fetch("http://localhost:8080/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(user),
    });
    const res = await data.json()
    if(res.token) {
      window.localStorage.setItem("token", res.token)
    }
    return res;
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ username, password }) => {
    const user = {
      username,
      password
    };
    const  data  = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(user),
    });
    const res = await data.json()
    if(res.token) {
      window.localStorage.setItem("token", res.token)
    }
    return res;
  }
);

export const getMe = createAsyncThunk(
  "auth/getMe",
  async () => {
    
    const  data  = await fetch("http://localhost:8080/auth/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Authorization": window.localStorage.getItem("token")
      },
    });
    const res = await data.json()
    return res;
  }
);



export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
            state.token = null
            state.isLoading = false
            state.status = null
    }
  },
  extraReducers: (builder) => {
    //REGISTER USER
    builder.addCase(registerUser.pending, (state, action) => {
      state.isLoading = true;
      state.status = null;
      state.eroors = null
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
      state.user = action.payload.newUser;
      state.token = action.payload.token;
      state.eroors = action.payload.errors;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.status = action.payload.message;
      state.isLoading = false;

    });

    //LOGIN USER
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
      state.status = null;
      state.eroors = null
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.eroors = action.payload.errors;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.status = action.payload.message;
      state.isLoading = false;
    });

    //getMe
    builder.addCase(getMe.pending, (state, action) => {
      state.isLoading = true;
      state.status = null;
      state.eroors = null
    });
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = null;
      state.user = action.payload?.user;
      state.token = action.payload?.token;
      state.eroors = action.payload?.errors;
    });
    builder.addCase(getMe.rejected, (state, action) => {
      state.status = action.payload?.message;
      state.isLoading = false;
    });


  },
});

export const checkIsAuth = (state) => Boolean(state.auth.token)
export const { logout } = authSlice.actions
export default authSlice.reducer