import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  // 사용자가 입력란에 입력해서 enteredName이 있는지를 확인, 초기값을 falsfe로 설정
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // 우리가 해야할 것: 1.입력값이 유효한지, 2. 사용자가 입력창을 건드렸는지,
  // 값이 유효하지 않고 입력창을 건드렸다면 => 사용자에게 에러 보여줌
  // 값이 유효+ 입력창을 건드렸다면 => 사용자에게 에러 보여주지 않음

  // 이미 존재하는 enteredName에서 얻기
  const enteredNameIsValid = enteredName.trim() !== "";

  // 입력창이 건드려진 뒤 + 값이 유효하지 않을때만 유효하지않게 판단
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid =false;

    if (enteredNameIsValid) {
      formIsValid=true
    }


  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandeler = (e) => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    setEnteredName("");
    setEnteredNameTouched(false);
  };

  // nameInputIsInvalid가 true일때 적용되고 그렇지 않을 때 적용되지 않도록
  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandeler}
          type="text"
          id="name"
        />
        {nameInputIsInValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
