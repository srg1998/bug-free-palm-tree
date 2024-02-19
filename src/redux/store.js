import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./reducer";

function loadState() {
  try {
    const serializedState = localStorage.getItem("redux");
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

export default configureStore({
  reducer: { formReducer },
  preloadedState: loadState(),
});
