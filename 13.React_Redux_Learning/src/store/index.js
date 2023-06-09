import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

// 무엇을 사용하든, 리덕스에는 전역 상태를 담당하는 단 하나의 주요 리듀서 함수만 있어야 함
//configureStore에서는 리듀서의 값이 단일 리듀서가 될 수 있음
const store = configureStore({
  // store는 하나일 수 밖에 없음. 그래서 이렇게 묶어줌
  reducer: {counter:counterReducer, auth:authReducer}
  // 컴포넌트에서 해당 slice의 state에 접근하는 방법은 지정한 key로 접근
  // useSelector(state=>state.counter.counter)
  // useSelector(state=>state.counter.showCounter)
  // useSelector(state=>state.auth.auth)
});



export default store;
