import React from 'react'
import {Link} from 'react-router-dom'
import Products from './Products'
export const Home = () => {
  return (
    <>
    <h1>Home</h1>
    <Link to="/products"> 
    <p>Go to the list of products</p>
    </Link>
    </>
  )
}
 