import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiAcitons } from "../../store/ui-slice";

const CartButton = (props) => {
  const data = useSelector((state) => state.cart.item);
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(uiAcitons.toggle());
  };

  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{data}</span>
    </button>
  );
};

export default CartButton;
