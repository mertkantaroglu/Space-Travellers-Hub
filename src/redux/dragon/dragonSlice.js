import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/dragons';

export const getDragon = createAsyncThunk(
  'books/getDragons',
  async () => {
    const res = await axios.get(
      url,
    );
    const dragons = Object.keys(res.data).map((key) => ({
      mission_id: key,
      ...res.data[key],
    }));
    return dragons;
  },
);

const initialState = {
  dragonStore: [],
  reservedDragon: [],
  status: 'idle',
  error: '',
};

const dragonSlice = createSlice({
  name: 'dragon',
  initialState,
  reducers: {
    reserveDragon: (state, action) => {
      const { id } = action.payload;
      state.dragonStore = state.dragonStore.map((dragon) => (
        (dragon.id === id ? { ...dragon, reserved: true } : dragon)));
      state.reservedDragon = [...state.reservedDragon, id];
    },
    cancelDragon: (state, action) => {
      const { id } = action.payload;
      state.dragonStore = state.dragonStore.map((dragon) => (
        (dragon.id === id ? { ...dragon, reserved: false } : dragon)));
      state.reservedDragon = state.reservedDragon.filter(
        (dragonId) => dragonId !== id,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDragon.pending, (state) => {
      state.status = 'loading';
    }).addCase(getDragon.fulfilled, (state, action) => {
      state.status = 'succeed';
      state.dragonStore = action.payload;
    }).addCase(getDragon.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const { reserveDragon, cancelDragon } = dragonSlice.actions;
export default dragonSlice.reducer;
