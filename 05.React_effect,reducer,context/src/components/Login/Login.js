import React, { useState ,useEffect,useReducer} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state,action) =>{
  // console.log(`state`,state)
  // console.log("action",action)
  if(action.type === "USER_INPUT"){
    //이메일의 state snaptshot반환
    // console.log({value:action.val, isValid:action.val.includes("@")})
    return {value:action.val, isValid:action.val.includes("@")}
    //  USER_INPUT 액션을 받을때마다 value와 isvalid를 모두 업데이트
    
  }
  if(action.type === "INPUT_BLUR"){
    // 이전에 받았던 값을 state로 반환
    return {value:state.value,isValid:state.value.includes("@")}
  }
  // 빈 snapshot
  return {value:"",isValid:false}
  // 이 리듀서로 오는 다른 모든 액션에 대해 이 기본 state를 반환
}


const passWordReducer =(state,action) => {
  //return값이 해당 리듀서의 state로 반환됨, 여기서는 54번재 줄의 emailState값
  
  if(action.type === "USER_INPUT"){
    return {value:action.val,isValid:action.val.trim().length > 6}
    
  }
  if(action.type === "INPUT_BLUR"){

    return {value:state.value,isValid:state.value.trim().length > 6}
  }
  return {value:"",isValid:false}
}


const Login = (props) => {


  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  //                                  useReducer(함수, 리듀서의 기본 state 객체)
  const [emailState, dispatchEmail] = useReducer(emailReducer,{value:"",isValid:undefined})
  const [passwordState, dispatchPassword] = useReducer(passWordReducer,{value:"",isValid:undefined })


  // 구조분해할당 + alias assignment
  const {isValid:emailIsValid} = emailState
  const {isValid:passwordIsValid} = passwordState

  useEffect(()=>{
    const identifier = setTimeout(() => {
      console.log("checking for validity");
      // console.log("이메일 유효성",emailIsValid)
      setFormIsValid(
        //setFormIsvalid를 호출하는 좋은 방법
        emailState.isValid && passwordState.isValid
      );
    }, 500);
    return()=>{
      console.log("CLEANUP")
      clearTimeout(identifier)
    }

    // 각 객체의 특정한 값들(isValid)를 구조분해할당으로 추출해서 해당 부분을 종속성으로 추가
    // 이메일과 패스워드의 true false값이 바뀔때만 해당 사이드이펙트가 실행됨
  },[emailIsValid,passwordIsValid])


  const emailChangeHandler = (event) => {
    // emailReducer에 해당 객체를 action으로 보내줌. 
    // 필드는 대부분 명명된 type, val은 payload
    dispatchEmail({type:"USER_INPUT",val:event.target.value});

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.value.trim().length > 6
    // );
    // 여전히 폼 유효성을 다른 state에서 도출함 => 여기서는 passwordState => 코드가 최적의 상태는 아님
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type:"USER_INPUT",val:event.target.value})
    
    // setFormIsValid(
    //  emailState.value.includes('@')  && event.target.value.trim().length > 6
    // );
    // 여전히 폼 유효성을 다른 state에서 도출함 => 여기서는 emailState => 코드가 최적의 상태는 아님
  };





  const validateEmailHandler = () => {
    dispatchEmail({type:"INPUT_BLUR"})
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type:"INPUT_BLUR"})
  };







  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
