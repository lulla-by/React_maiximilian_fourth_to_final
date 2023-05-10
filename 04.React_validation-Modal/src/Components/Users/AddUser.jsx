import React, { useState,useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  //구조분해할당
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName =  nameInputRef.current.value
    const enteredAge =  ageInputRef.current.value
    if (
      enteredName.trim().length === 0 ||
      enteredAge.trim().length === 0
    ) {
      setError({
        title: "invalid input",
        message: "Please enter a valid name and age(non-empty values).",
      });
      return;
    }
    if (enteredAge < 1) {
      setError({
        title: "invalid age",
        message: "Please enter a valid age( age > 0).",
      });
      return;
    }
    let userData = {
      name: enteredName,
      age: enteredAge,
      id: Math.random(),
    };
    props.onAddUser(userData)
    nameInputRef.current.value = ""
    ageInputRef.current.value = ""
  };


  const errorHandeler = () =>
  {
    setError(null)
  }
  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} errorHandeler = {errorHandeler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button onClick={addUserHandler} type="submit">
            Add User
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
