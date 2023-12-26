import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: null,
  token: null,
  isLoading: false,
  status: null,
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
    builder.addCase(registerUser.pending, (state, action) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
      state.user = action.payload.newUser;
      state.token = action.payload.token;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.status = action.payload.message;
      state.isLoading = false;
    });
  },
});
// export const { logout } = authSlice.actions
export default authSlice.reducer