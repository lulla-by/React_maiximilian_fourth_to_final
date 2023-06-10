import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cart-actions";

// 맨처음 컴포넌트 렌더링 상황에서는 notification컴포넌트롤 보여주지 않기 위해 설정
// 초기 렌더링 이후에는 false로 설정하여 이후에 데이터 송신시에는 상태 처리 여부가 보여짐
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  //파이어베이스로 전송해줄 cart 값
  const cart = useSelector((state) => state.cart);
  //props로 전달할 notification의 상태값
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);
  return (
    <Fragment>
      {notification && <Notification items={notification} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
