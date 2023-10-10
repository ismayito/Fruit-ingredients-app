import { configureStore } from '@reduxjs/toolkit';
import FruitSlice from './FruitSlice';

const store = configureStore({
  reducer: {
    fruit: FruitSlice,
  },
});

export default store;
