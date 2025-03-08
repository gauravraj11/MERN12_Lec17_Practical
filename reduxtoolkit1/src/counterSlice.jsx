
// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  amount: 10,
};

const counterSlice = createSlice({

  name: 'counter',

  initialState,

  reducers: {
    increment: state => {
      state.amount += 1;
    },
    decrement: state => {
      state.amount -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;


