import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../axios/apiClient';

export const fetchBrands = createAsyncThunk('brands/fetchBrands', async () => {
  const response = await API.get('/disert');
  return response.data;
});

const brandsSlice = createSlice({
  name: 'brands',
  initialState: {
    brands: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default brandsSlice.reducer;
