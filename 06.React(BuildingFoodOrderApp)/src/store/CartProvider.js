// CartContexm데이터를 관리하고 그 컨텍스트를 접근하려는 모든 컴포넌트에 제공하는 것
// 장바구니 데이터를 관리함

import { useReducer } from "react";
// 1.import reducer
import CartContext from "./cart-context";

// 3. initialState
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// 2. 컴포넌트 외부에서 CartReducer함수 추가 => 이 리듀서 함수는 그 컴포넌트에서 아무것도 필요로 하지 않음
const cartReduce = (state, action) => {
  console.log(action)
  if(action.type === "ADD"){
    const updatedItems = state.items.concat(action.item);
    const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {items:updatedItems, totalAmount:newTotalAmount }
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReduce,
    defaultCartState
  );
  console.log(cartState)
  const addItemCartHandler = (item) => {
    dispatchCartAction({
      type:"ADD",
      item:item
    })
  };

  const removeItemCartHandelr = (id) => {
    dispatchCartAction({
      type:"REMOVE",
      id:id
    })
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCartHandler,
    removeItem: removeItemCartHandelr,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
