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
  reducers: {
    joinMission: (state, action) => {
      const { payload } = action;
      const missionList = state.missionList.map((mission) => {
        if (mission.id !== payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
      return { ...state, missionList };
    },
    leaveMission: (state, action) => {
      const { payload } = action;
      const missionList = state.missionList.map((mission) => {
        if (mission.id !== payload) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
      return { ...state, missionList };
    },
  },

  extraReducers(builder) {
    builder
      .addCase(getMissions.pending, (state) => {
        state.status = 'loading';
      })

      .addCase(getMissions.fulfilled, (state, action) => {
        const { payload } = action;
        const missionList = payload.map(({
          mission_id: id, mission_name: name, description,
        }) => ({
          id, name, description,
        }));
        return {
          ...state,
          missionList,
          status: 'succeed',
        };
      })

      .addCase(getMissions.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      }));
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
