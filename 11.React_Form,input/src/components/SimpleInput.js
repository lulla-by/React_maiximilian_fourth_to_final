import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const nameInputRef = useRef();

  // 검증을 위한  state추가, 기본 state를 false로 지정하여 초기값이 유효하지 않도록 설정,
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    // 위의 조건문을 통과하면 유효한것
    setEnteredNameIsValid(true);
    const enteredValue = nameInputRef.current.value;
    setEnteredName("");
  };

  const nameInputClasses = enteredNameIsValid ? "form-control":"form-control invalid"
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          value={enteredName}
          onChange={nameInputChangeHandler}
          type="text"
          id="name"
        />
        {!enteredNameIsValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
