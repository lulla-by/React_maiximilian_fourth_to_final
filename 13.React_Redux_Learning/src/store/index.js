// 리덕스 로직 저장
import { createStore } from "redux";

let initialState = {
  counter: 0,
  showCounter: true,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    if (action.amount) {

      // 리덕스에서는 이처럼 원본 state를 건드리면 안됌

      // state.counter++

      // return{
      //   counter:state.counter,
      //   showCounter:state.showCounter
      // }

      // 코드가 정상적으로 작동되는 것처럼 보이지만,
      // 이럴 경우 예상못한 버그가 발생하거나 프로그램 디버깅이 어려워질 수 있음
      // 버그가 발생하지 않더라도 state가 동기화되지 않는 더 큰 애플리케이션에서 예기치 않은 부작용이 생길 수 있고
      // 갑자기 UI가 더이상 state를 정확히 반영하지 않을 수 있음


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
