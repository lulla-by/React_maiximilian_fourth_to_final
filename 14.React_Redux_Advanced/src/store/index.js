
import { configureStore } from '@reduxjs/toolkit';
import uiSlice, { uiAcitons } from './ui-slice';
import cartSlice from './cart';

const store = configureStore({
  reducer:{ui:uiSlice.reducer, cart:cartSlice.reducer}
})

export default store;