import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
  loading: false,
  newsList: null
}

export const getNewsAll = createAsyncThunk(
  "news/all",
  async()=> {
    const data = await fetch("http://localhost:8080/news/all")
    const res = await data.json()
    console.log(res)
    return res
  }
)

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (buider) => {
    buider
        .addCase(getNewsAll.pending, (state, action) => {
          state.loading = true
        })
        .addCase(getNewsAll.fulfilled, (state, action) => {
          state.loading = false;
          state.newsList = action.payload
        })
  }
})

export default newsSlice.reducer