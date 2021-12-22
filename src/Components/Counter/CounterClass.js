import { Component } from "react";
import styles from "./Counter.module.css";
import { useSelector, useDispatch, connect } from "react-redux";
class CounterClass extends Component {
  constructor() {
    super();
  }
  incrementHandler() {
    this.props.increment();
  }
  decrementHandler() {
    this.props.decrement();
  }

  toggleHandler() {}
  render() {
    return (
      <main className={styles.counter}>
        <h1>Redux App</h1>
        <div className={styles.value}>{this.props.counter}</div>
        <div className={styles.btn}>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleHandler.bind(this)}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return { counter: state.counter };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);

{
  /**
newcomponent  =higherordercomponent(CounterClass)


*/
}
