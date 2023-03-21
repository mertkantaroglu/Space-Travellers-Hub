import { configureStore } from "@reduxjs/toolkit";
import missionsReducer from './mission/missionSlice';
import rocketReducer from "./Rocket/rocketSlice";

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketReducer,
  },
});

export default store;

