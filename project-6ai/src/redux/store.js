import { configureStore } from '@reduxjs/toolkit';
import brandsReducer from './createSlice';

const store = configureStore({
  reducer: {
    brands: brandsReducer,
  },
});

export default store;
