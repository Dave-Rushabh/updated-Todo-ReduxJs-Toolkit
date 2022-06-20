import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
    completedTodo: [],
  },
  reducers: {
    add_Todo: (state, action) => {
      const { todoList } = state;
      todoList.push(action.payload);
    },
    remove_Todo: (state, action) => {
      const { todoList } = state;
      const { id } = action.payload;

      const newArr = todoList.filter((item) => item.id !== id);
      state.todoList = newArr;
    },
    complete_Todo: (state, action) => {
      const { completedTodo } = state;
      const { id } = action.payload;

      console.log("action.payload", action.payload);

      const newArr = completedTodo.filter((item) => item.id === id);
      newArr.length === 0 && completedTodo.push(action.payload);
    },
    remove_CompletedTodo: (state, action) => {
      const { completedTodo } = state;
      const { id } = action.payload;

      const newArr = completedTodo.filter((item) => item.id !== id);
      state.completedTodo = newArr;
    },
  },
});

export default todoSlice.reducer;
export const { add_Todo, remove_Todo, complete_Todo, remove_CompletedTodo } =
  todoSlice.actions;
