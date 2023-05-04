import React from 'react'
import classes from "./Card.module.css"
const Card = (props) => {
  console.log(props.className)
  console.log(classes.card)
  return (
    <div className={`${classes.card} ${props.className}` }>
      {props.children}
    </div> 
  )
}

export default Card