import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './mission/missionSlice';
import rocketReducer from './Rocket/rocketSlice';
import dragonReducer from './dragon/dragonSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketReducer,
    dragons: dragonReducer,
  },
});

export default store;
