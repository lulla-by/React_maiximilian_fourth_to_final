import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import { authActions } from "../store";

const Header = () => {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const loginHandeler = () => {
    dispatch(authActions.login());
  };
  const logoutHandeler = () => {
    dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            {auth === true ? (
              <button onClick={logoutHandeler}>Logout</button>
            ) : (
              <button onClick={loginHandeler}>Login</button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
