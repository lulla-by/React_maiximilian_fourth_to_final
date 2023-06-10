import {createSlice } from '@reduxjs/toolkit';


const initialState = {
  item:0
}

const cartSlice = createSlice({
  name:"cart",
  initialState,
  reducers:{
    add(state){
      state.item++
    },
    remove(state){
      state.item--
    }
  }
})

export const cartActions = cartSlice.actions
export default cartSlice;