import { createSlice } from "@reduxjs/toolkit";
import { uiAcitons } from "./ui-slice";

const initialState = {
  items: [],
  totalQuntity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuntity = action.payload.totalQuntity;
      state.items = action.payload.items;
    },
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

// Thunk
// 이 데이터는 다른 작업을 수행하지 않고 다른 함수인 비동기 함수를 즉시 반환함
export const sendCartData = (cart) => {
  // 반환된 이 비동기 함수에서 알림 작업을 dispatch
  return async (dispatch) => {
    // 전송중이라고 알림을 dispatch
    dispatch(
      uiAcitons.showNotification({
        status: "pending",
        title: "Sending..",
        message: "Sending cart data!",
      })
    );

// 그다음 새 함수를 만들어서 요청을 보내고
    const sendRequest = async () => {
      const response = await fetch(`${process.env.REACT_APP_URL}cart.json`, {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Sendig cart data faild");
      }
    };

    //에러를 잡기위해 try{} cathc{} 사용
    try {
      await sendRequest();
      // 오류가 없으면 성공 알림을 dispatch
      dispatch(
        uiAcitons.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      // 오류가 있으면 오류 알림을 dispatch
      dispatch(
        uiAcitons.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice;
