// CartContexm데이터를 관리하고 그 컨텍스트를 접근하려는 모든 컴포넌트에 제공하는 것

import CartContext from "./cart-context"
const CartProvider = props =>{

  const addItemCartHandler = item =>{};

  const removeItemCartHandelr = id =>{}
  const cartContext = {
    item:[],
    totalAmount:0,
    addItem:addItemCartHandler,
    removeItem:removeItemCartHandelr
  }
  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>

}

export default CartProvider