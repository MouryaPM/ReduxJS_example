import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import ourstore from "./Components/ReduxStore/redux-file";
import ourstore from "./Components/ReduxStore/redux-toolkit";
import { Provider } from "react-redux";
ReactDOM.render(
  <Provider store={ourstore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
