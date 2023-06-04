import { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const nameInputRef = useRef();

  // 검증을 위한  state추가, 기본 state를 false로 지정하여 초기값이 유효하지 않도록 설정,
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  // 사용자가 입력란에 입력해서 enteredName이 있는지를 확인, 초기값을 falsfe로 설정
  const [enteredNameTouched,setEnteredNameTouched] = useState(false)

  useEffect(()=>{
    if(enteredNameIsValid){
      console.log("Name input is valid!")
    }
  },[enteredNameIsValid])


  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
    // 조건문에 e.target.value를 넣는 이유
    // 비록 setEnteredName으로 업데이트하고 있으나
    // 이러한 상태들은 리액트에서 비동기적으로 처리되므로 즉각적으로 반영되지 않음
    if (e.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
    }
  };


  const nameInputBlurHandeler=(e)=>{
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    }
  }


  const formSubmissionHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      console.log("불통과")
      return;
    }
    console.log("통과")
    // 위의 조건문을 통과하면 유효한것
    setEnteredNameIsValid(true);
    // const enteredValue = nameInputRef.current.value;
    setEnteredName("");
  };
                        // 입력창이 건드려진 뒤 + 값이 유효하지 않을때만 유효하지않게 판단
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;
 
  // nameInputIsInvalid가 true일때 적용되고 그렇지 않을 때 적용되지 않도록
  const nameInputClasses = nameInputIsInValid ? "form-control invalid":"form-control"


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandeler}
          type="text"
          id="name"
        />
        {nameInputIsInValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
