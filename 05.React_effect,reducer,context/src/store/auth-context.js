import React, { useEffect, useState } from "react";

// 컨텍스트 객체 생성
const AuthContext = React.createContext({
  //기본값 false
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email,password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    // useEffect는 사이드이펙트
    useEffect(() => {
      const userLoggeIn = localStorage.getItem("isLoggedIn");
      if (userLoggeIn === "1") {
        setIsLoggedIn(true);
      }
    }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
