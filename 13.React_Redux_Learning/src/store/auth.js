import { createSlice } from "@reduxjs/toolkit";

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


export const authActions = authSlice.actions;

export default authSlice.reducer;
