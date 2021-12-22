import styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../ReduxStore/redux-toolkit";
const Login = () => {
  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };
  return (
    <main className={styles.login}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor="emil">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={styles.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Login;
