import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  //구조분해할당
  let [enteredUserName, setEnteredUserName] = useState("");
  let [enteredUserAge, setEnteredUserAge] = useState("");
  const addUserHandler = (e) => {
    e.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      return;
    }
    if (enteredUserAge < 1) {
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

  return (
    <>
    <ErrorModal title ={"에러 발생!"} message={"에러가 발생했습니다!"}/>
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
    </>
  );
};

export default AddUser;
