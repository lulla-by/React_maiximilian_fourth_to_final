import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  //구조분해할당
  let [enteredUserName, setEnteredUserName] = useState("");
  let [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "invalid input",
        message: "Please enter a valid name and age(non-empty values).",
      });
      return;
    }
    if (enteredUserAge < 1) {
      setError({
        title: "invalid age",
        message: "Please enter a valid age( age > 0).",
      });
      return;
    }
    let userData = {
      name: enteredUserName,
      age: enteredUserAge,
      id: Math.random(),
    };
    props.onAddUser(userData);
    setEnteredUserAge("");
    setEnteredUserName("");
  };
  const userNameChangeHandeler = (e) => {
    setEnteredUserName(e.target.value);
  };
  const userAgeChangeHandeler = (e) => {
    setEnteredUserAge(e.target.value);
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
            value={enteredUserName}
            id="username"
            type="text"
            onChange={userNameChangeHandeler}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            value={enteredUserAge}
            id="age"
            type="number"
            onChange={userAgeChangeHandeler}
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
