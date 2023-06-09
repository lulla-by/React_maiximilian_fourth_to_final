// 리덕스 로직 저장
import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  counter: 0,
  showCounter: true,
};

// 전역상태의 slice를 미리 만들기
createSlice({
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

const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    if (action.amount) {
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
    } else {
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
    }
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "TOGGLE") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
