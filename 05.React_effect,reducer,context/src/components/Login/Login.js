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
  console.log("state",state)
  console.log("action",action)
  if(action.type === "USER_INPUT"){
    return {value:action.val,isValid:action.val.trim().length > 6}
    
  }
  if(action.type === "INPUT_BLUR"){

    return {value:state.value,isValid:state.value.trim().length > 6}
  }
  return {value:"",isValid:false}
}


const Login = (props) => {
  console.log(props)


  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  //                                  useReducer(함수, 리듀서의 기본 state 객체)
  const [emailState, dispatchEmail] = useReducer(emailReducer,{value:"",isValid:undefined})
  const [passwordState, dispatchPassword] = useReducer(passWordReducer,{value:"",isValid:undefined })

  // useEffect(()=>{
  //   const identifier = setTimeout(() => {
  //     console.log("1")
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);
  //   console.log("2")
  //   return()=>{
  //     console.log("3")
  //     clearTimeout(identifier)
  //   }
  // },[enteredEmail,enteredPassword])


  const emailChangeHandler = (event) => {
    // emailReducer에 해당 객체를 action으로 보내줌. 
    // 필드는 대부분 명명된 type, val은 payload
    dispatchEmail({type:"USER_INPUT",val:event.target.value});

    setFormIsValid(
      event.target.value.includes('@') && passwordState.value.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type:"USER_INPUT",val:event.target.value})
    
    setFormIsValid(
     emailState.value.includes('@')  && event.target.value.trim().length > 6
    );
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
