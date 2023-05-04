import React from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from "./AddUser.module.css"

const AddUser = (props) => {
console.log(classes.input)
  const addUserHandler = e =>{
    e.preventDefault()
  }

  return (
    <Card className={classes.input}>
    <form onSubmit={addUserHandler }>
      <label htmlFor="username">User Name</label>
      <input id='username' type="text" />
      <label htmlFor="age">Age(Years)</label>
      <input id='age' type="number" />
      <Button type='submit'>Add User</Button>
    </form>
    </Card>
  )
}

export default AddUser