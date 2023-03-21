import { configureStore } from '@reduxjs/toolkit';
import dragonReducer from './dragon/dragonSlice';

const store = configureStore({
  reducer: {
    dragonReducer,
  },
});

export default store;