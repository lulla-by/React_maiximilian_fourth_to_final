import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {

  const [enteredTitle,setEnteredTitle] = useState( "") //input 요소의 값은 언제나 문자열이라 관리차원으로 빈 스트링 적용
  const [enteredAmount,setEnteredAmount] = useState( "")
  const submitHandler = event => {
    event.preventDefault();
    const ingredient = {id:Math.random().toString(),title:enteredTitle,amount:enteredAmount}
    props.onAddIngredient(ingredient)
    setEnteredTitle("");
    setEnteredAmount("")
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" value={enteredTitle} 
            onChange={(event) => { 
              setEnteredTitle(event.target.value) }} />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={enteredAmount} 
            onChange={(event) => {
              setEnteredAmount(event.target.value) }} />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
