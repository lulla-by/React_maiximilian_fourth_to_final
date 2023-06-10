import { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiAcitons } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

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
    const sendCartData = async () => {
      // App컴포넌트 상단에 표시될 데이터 송신후 처리여부를 위한 dispathc 설정(전송중)
      dispatch(
        uiAcitons.showNotification({
          status: "pending",
          title: "Sending..",
          message: "Sending cart data!",
        })
      );

      // 현재 cart의 값을 파이어베이스 /cart.json으로 전송
      const response = await fetch(`${process.env.REACT_APP_URL}cart.json`, {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Sendig cart data faild");
      }
      // App컴포넌트 상단에 표시될 데이터 송신후 처리여부를 위한 dispathc 설정(성공)
      dispatch(
        uiAcitons.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    };

    // app컴포넌트 외부에서 설정한 초기 notificaiton 컴포넌트 관련 작업
    if (isInitial) {
      isInitial = false;
      return;
    }
    // App컴포넌트 상단에 표시될 데이터 송신후 처리여부를 위한 dispathc 설정(에러발생)
    sendCartData().catch((error) => {
      dispatch(
        uiAcitons.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed",
        })
      );
    });
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
