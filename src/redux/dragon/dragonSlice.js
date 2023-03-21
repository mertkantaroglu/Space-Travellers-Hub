import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://api.spacexdata.com/v4/dragons";

export const getDragon = createAsyncThunk(
  'books/getDragons',
  async () => {
    const res = await axios.get(
      url,
    )
    const dragons = Object.keys(res.data).map((key) => ({
      mission_id: key,
      ...res.data[key]
    }))
    return dragons;
  }
)

const initialState = {
  dragonStore: [],
  status: 'idle',
  error: '',
}

const dragonSlice = createSlice({
  name: 'dragon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDragon.pending, (state) => {
      state.status = 'loading';
    }).addCase(getDragon.fulfilled, (state, action) => {
      state.status = 'succeed';
      state.dragonStore = action.payload;
    }).addCase(getDragon.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })
  }
})

export default dragonSlice.reducer;