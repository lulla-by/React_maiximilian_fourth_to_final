import React from "react";

// 컨텍스트 객체 생성
const AuthContext = React.createContext({
  //기본값 false
  isLoggedIn:false
});

export default AuthContext;
