import { cartActions } from '../../store/cart';
import classes from './CartItem.module.css';
import { useSelector,useDispatch } from 'react-redux';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;

  const data = useSelector(state=>state.cart.item)
  const dispatch = useDispatch()

  const addHandeler = ()=>{
    dispatch(cartActions.add())
  }
  const removeHandeler = ()=>{
    dispatch(cartActions.remove())
  }

  const totalPay = data*6

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPay.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{data}</span>
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
