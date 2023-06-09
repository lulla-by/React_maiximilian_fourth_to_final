import { createSlice } from "@reduxjs/toolkit";

let initialCounterState = {
  counter: 0,
  showCounter: true,
};

// 전역상태의 slice를 미리 만들기
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
      // console.log(action);
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;