import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuntity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, aciton) {
      const newItem = aciton.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuntity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuntity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        // existingItem.totalPrice = existingItem.totalPrice - existingItem.price
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
