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
  if(action.type === "ADD"){
    const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingCartIndex = state.items.findIndex(item => item.id === action.item.id )
    const existingCartItem = state.items[existingCartIndex]

    let updatedItems;
    
    if(existingCartItem){
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      }
      updatedItems = [...state.items]
      updatedItems[existingCartIndex] = updatedItem;
    }else{
      updatedItems=state.items.concat(action.item);
    }

    return {items:updatedItems, totalAmount:newTotalAmount }
  }

  if(action.type === "REMOVE"){
    
    
    const existingCartIndex = state.items.findIndex(item => item.id === action.id )
    const existingItem = state.items[existingCartIndex]
    const updatedTotalAmount = state.totalAmount - existingItem.price
    let updatedItems;
    if(existingItem.amount ===1){
      updatedItems = state.items.filter(item=>item.id !== action.id)
    }else{
      const updatedItem = {...existingItem, amount:existingItem.amount - 1}
      updatedItems = [...state.items];
      updatedItems[existingCartIndex] = updatedItem
    }
return {
  items:updatedItems,
  totalAmount:updatedTotalAmount
}
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReduce,
    defaultCartState
  );
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
