import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {

  const inputState = useState({ title: "", amount: "" }) //input 요소의 값은 언제나 문자열이라 관리차원으로 빈 스트링 적용
  const submitHandler = event => {
    event.preventDefault();
    console.log(inputState[0]);
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" value={inputState[0].title} 
            onChange={(event) => { 
              const newTitle = event.target.value
              inputState[1]((prevInputState)=>({ title: newTitle, amount: prevInputState.amount })) }} />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={inputState[0].amount} 
            onChange={(event) => {
              const newAmount = event.target.value
              inputState[1]((prevInputState)=>({ title:prevInputState.title, amount:newAmount})) }} />
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
