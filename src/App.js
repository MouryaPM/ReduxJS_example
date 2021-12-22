import React from "react";
import Counter from "./Components/Counter/Counter";
import CounterClass from "./Components/Counter/CounterClass";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { useSelector } from "react-redux";
function App() {
  const userLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <React.Fragment>
      <Header />
      {!userLoggedIn ? <Login /> : <Home />}
      <Counter />
    </React.Fragment>
  );
}

export default App;
