import styles from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../ReduxStore/redux-toolkit";
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showValue = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    //dispatch({ type: "increment" });
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    //  dispatch({ type: "increase", value: 5 });
    dispatch(counterActions.increase(5));
  };
  const toggleHandler = () => {
    //   dispatch({ type: "toggle" });
    dispatch(counterActions.toggle());
  };
  return (
    <main className={styles.counter}>
      <h1>Redux App</h1>
      {showValue ? <div className={styles.value}>{counter}</div> : ""}
      <div className={styles.btn}>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
