import { createSlice,configureStore } from "@reduxjs/toolkit";

let initialState = {
  counter: 0,
  showCounter: true,
};

// 전역상태의 slice를 미리 만들기
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// 무엇을 사용하든, 리덕스에는 전역 상태를 담당하는 단 하나의 주요 리듀서 함수만 있어야 함
//configureStore에서는 리듀서의 값이 단일 리듀서가 될 수 있음
const store = configureStore({
  reducer:counterSlice.reducer
} );

export default store;
