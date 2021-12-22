import styles from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../ReduxStore/redux-toolkit";
const Header = () => {
  const loggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <header className={styles.header}>
      <h1>Redux App</h1>
      {loggedIn ? (
        <nav>
          <ul>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Settings</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
