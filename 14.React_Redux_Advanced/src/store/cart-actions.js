import cartSlice, { cartActions } from "./cart";
import { uiAcitons } from "./ui-slice";
// Thunk

//데이터를 가져오는 역할
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.REACT_APP_URL}cart.json`);
      if (!response) {
        throw new Error("Could not fetch cart data!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart({
        items:cartData.items || [],
        totalQuantity:cartData.totalQuantity
      }));
    } catch (error) {
      console.log(error);
      dispatch(
        uiAcitons.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed",
        })
      );
    }
  };
};

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
        body: JSON.stringify({items:cart.items, totalQuantity:cart.totalQuantity}),
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
