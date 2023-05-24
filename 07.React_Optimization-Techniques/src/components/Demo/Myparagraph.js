import React from 'react'

const Myparagraph = (props) => {
  console.log("3. myParagraph Running")
  return (
    <p>{props.children}</p>
  )
}

export default Myparagraph