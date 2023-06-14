// import { useState } from 'react';
import { Form, Link, useActionData, useSearchParams, useNavigation } from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm() {
  //해당 양식이 전송한 그 함수가 리턴한 데이터 추출
  const data = useActionData();

  const navigation = useNavigation()
  // console.log(navigation)
  const isSubmitting = navigation.state ==="submitting"

  // 현재 설정된 쿼리 매개변수에 쉽게 접근할 수 있는 훅
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        {data && data.errors && (
          <ul>
            {/* 가지고 있는 에러정보를 전부 렌더링하는 순서 없는 리스트 출력 */}
            {Object.values(data.errors).map(error=><li key={error}>{error}</li>)}
          </ul>
        )}
        {data&&data.message &&<p>{data.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button disabled={isSubmitting}>{isSubmitting?"submitting...":"save"}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
