// 리덕스 로직 저장
import { createStore } from "redux";

let initialState = {
  counter: 0,
  showCounter: true,
};

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
