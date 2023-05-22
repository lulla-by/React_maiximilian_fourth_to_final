import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import { Input } from "../../UI/Input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {/* ref를 받고싶은 컴포넌트(<Input/>)으로 가서 컴포넌트 함수를 React.forwardRef로 감싸야함*/}
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          basic: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Pleas enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
