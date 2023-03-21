import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async () => {
    const response = await axios.get(url);
    return response.data;
  },
);

const initialState = {
  missionList: [],
  status: 'idle',
  error: null,
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers(builder) {
    builder
    .addCase(getMissions.pending, (state) => {
      state.status = 'loading';
    })

    .addCase(getMissions.fulfilled, (state, action) => {
      const { payload } = action;
      const missionList = payload.map(({
        mission_id: id, mission_name: name, description
      }) => ({
        id, name, description
      }));
      return {
        ...state,
        missionList,
        status: 'loaded',
      };
    })

    .addCase(getMissions.rejected, (state, action) => ({
      ...state,
      status: 'failed',
      error: [...state.error, action.error.message],
    }));
  },
});

export default missionSlice.reducer;