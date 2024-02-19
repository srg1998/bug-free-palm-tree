import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import { Provider } from "react-redux";
import store from "./redux/store";

async function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("redux", serializedState);
  } catch (e) {
    console.log("error :", e);
  }
}

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

// here we subscribe to the store changes
store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
