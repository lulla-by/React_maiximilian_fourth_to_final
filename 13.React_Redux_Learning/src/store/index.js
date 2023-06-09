// 리덕스 로직 저장
import { createStore } from "redux";

let initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  if(action.type === "INCREMENT"){
    return {
      counter:state.counter + 1
    }
  }
  if(action.type === "DECREMENT"){
    return {
      counter:state.counter - 1
    }
  }

  return state;
};

const store = createStore(counterReducer);


export default store;