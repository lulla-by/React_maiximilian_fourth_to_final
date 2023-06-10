import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiAcitons } from "../../store/ui-slice";

const CartButton = (props) => {
  const totalQuntity = useSelector((state) => state.cart.totalQuntity);
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiAcitons.toggle());
  };

  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuntity}</span>
    </button>
  );
};

export default CartButton;
