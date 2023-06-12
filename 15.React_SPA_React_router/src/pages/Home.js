import React from "react";
import { Link, useNavigate } from "react-router-dom";
export const HomePage = () => {
  const navigate = useNavigate();

  function navigationHandeler(){
    // 버튼클릭으로 함수를 트리고하고 그 함수 안에 실제코드 즉, 다른 페이지로 이동하기 위한
    // 프로그램적인 강제적 네비게이션 코드가 있음
    navigate("/products")
  }
  return (
    <>
      <h1>Home</h1>
      <p>
        Go to
        <Link to="/products"> the list of products</Link>
      </p>
      <p><button onClick={navigationHandeler}>Navigate</button></p>
    </>
  );
};
