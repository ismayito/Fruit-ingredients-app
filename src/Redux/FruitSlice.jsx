import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://financialmodelingprep.com/api/v3/etf/list?apikey=Uzp6uPPYHijJhgsqRJ47VGkhzdZW3Yi1';
const initialState = {
  fruits: [],
  isLoading: false,
  error: null,
};

export const fetchFruits = createAsyncThunk('fruits/fetchFruits', () => {
  const result = axios.get(`${url}`).then((response) => response.data);
  return result;
});

const FruitSlice = createSlice(
  {
    name: 'FruitSlice',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder.addCase(fetchFruits.pending, (state) => ({
        ...state, isLoading,
      })),
      builder.addCase(fetchFruits.fulfilled, (state, action) => ({
        ...state, isLoading: false, fruits: action.payload,
      })),
      builder.addCase(fetchFruits.rejected, (state, action) => ({
        ...state, isLoading: false, error: action.payload,
      }));
    },
  },
);
export const { extraReducers } = FruitSlice.actions;
export default FruitSlice.reducer;
