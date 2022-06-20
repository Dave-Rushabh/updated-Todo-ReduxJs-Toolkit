import { configureStore } from "@reduxjs/toolkit";
import counter from "./reducers/counter";
import todo from "./reducers/todo";

const store = configureStore({
  reducer: {
    counterReducer: counter,
    todoReducer: todo,
  },
});

export default store;
