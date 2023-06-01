import { useState, useRef } from 'react';


const SimpleInput = (props) => {
  const [enteredName,setEnteredName] = useState("");  
  const nameInputRef = useRef()

  const nameInputChangeHandler = e =>{
    setEnteredName(e.target.value)
  }

  const formSubmissionHandler = e =>{
e.preventDefault();
const enteredValue = nameInputRef.current.value
console.log(enteredName);
console.log(enteredValue);

// nameInputRef.current.value = "" => Not ideal, Don't manipulate the DOM.
setEnteredName("")
}
  return (
    <form onSubmit={formSubmissionHandler}> 
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} value={enteredName} onChange={nameInputChangeHandler} type='text' id='name' />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
