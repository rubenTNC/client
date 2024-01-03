import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
  loading: false,
  newsList: null,
  fullNews: null
}

export const getNewsAll = createAsyncThunk(
  "news/all",
  async()=> {
    const data = await fetch("http://localhost:8080/news/all")
    const res = await data.json()
    return res
  }
)

export const getFullNews = createAsyncThunk(
  "news",
  async(id)=> {
     const data = await fetch(`http://localhost:8080${id}`)
     const res = await data.json()
    return res
  }
)

export const getNews = createAsyncThunk(
  "news",
  async(id)=> {
    const data = await fetch(`http://localhost:8080/${id}`)
    const res = await data.json()
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
        .addCase(getFullNews.pending, (state, action) => {
          state.loading = true
          state.fullNews = null
        })
        .addCase(getNewsAll.fulfilled, (state, action) => {
          state.loading = false;
          state.newsList = action.payload
        })
        .addCase(getFullNews.fulfilled, (state, action) => {
          state.loading = false
          state.fullNews = action.payload
        })
  }
})

export default newsSlice.reducer