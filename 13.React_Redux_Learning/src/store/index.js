import { createSlice, configureStore } from "@reduxjs/toolkit";

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


// auth의 초기값 설정
const initialAuthState = {
  isAuthenticated: false,
};

// 새로운 slice 생성
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// 무엇을 사용하든, 리덕스에는 전역 상태를 담당하는 단 하나의 주요 리듀서 함수만 있어야 함
//configureStore에서는 리듀서의 값이 단일 리듀서가 될 수 있음
const store = configureStore({
  // store는 하나일 수 밖에 없음. 그래서 이렇게 묶어줌
  reducer: {counter:counterSlice.reducer, auth:authSlice.reducer}
  // 컴포넌트에서 해당 slice의 state에 접근하는 방법은 지정한 key로 접근
  // useSelector(state=>state.counter.counter)
  // useSelector(state=>state.counter.showCounter)
  // useSelector(state=>state.auth.auth)
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
