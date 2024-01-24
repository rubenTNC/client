import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  status: null,
  message: "",
  wordsList: []
};

export const getMyWords = createAsyncThunk(
  "words/getMy",
  async () => {
    const  data  = await fetch("http://localhost:8080/words/getMy", {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Authorization": window.localStorage.getItem("token")
      }
    });
    const res = await data.json()
    return res;
  }
);



export const addWord = createAsyncThunk(
  "words/add",
  async ({  word, language, translation }) => {
    const wordOb = {
      word,
      language,
      translation,
    };
    const  data  = await fetch("http://localhost:8080/words/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Authorization": window.localStorage.getItem("token")
      },
      body: JSON.stringify(wordOb),
    });
    const res = await data.json()
    return res;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(addWord.pending, (state, action) => {
        state.loading = true
        state.message = ""
        state.status = null
      })
      .addCase(addWord.fulfilled, (state, action) => {
        state.loading = false
        state.message = action.payload.message
        state.status = action.payload.status
      })
      .addCase(getMyWords.pending, (state, action) => {
        state.loading = true
        state.message = ""
        state.status = null
      })
      .addCase(getMyWords.fulfilled, (state, action) => {
        state.loading = false
        state.wordsList = action.payload.words
      })
  },
});

export default authSlice.reducer;
