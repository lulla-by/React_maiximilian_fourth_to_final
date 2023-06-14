// import { useState } from 'react';
import { Form,Link, useSearchParams } from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {

  // 현재 설정된 쿼리 매개변수에 쉽게 접근할 수 있는 훅
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin?'signUp':"login"}`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button>Save</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
