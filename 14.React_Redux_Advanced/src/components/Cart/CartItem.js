import { cartActions } from '../../store/cart';
import classes from './CartItem.module.css';
import { useSelector,useDispatch } from 'react-redux';

const CartItem = (props) => {
  const { id,title, quantity, total, price } = props.item;

  // const data = useSelector((state) => state.cart.totalQuntity);
  const dispatch = useDispatch()

  const addHandeler = ()=>{
    dispatch(cartActions.addItemToCart({id,title,quantity,price}));
  }
  const removeHandeler = ()=>{
    dispatch(cartActions.removeItemFromCart(id));
  }

  // const totalPay = data*6

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHandeler}>-</button>
          <button  onClick={addHandeler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
