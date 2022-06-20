import React, { useState } from "react";
import "./Todo.css";
import { useSelector, useDispatch } from "react-redux";
// import { add, sub } from "../../store/reducers/counter";
import { add_Todo } from "../../store/reducers/todo";

const Todo = () => {
  // const count = useSelector((state) => state.counterReducer.count);
  const todoArrayFromStore = useSelector((state) => state.todoReducer.todoList);

  const dispatch = useDispatch();

  const [todoList, setTodoList] = useState({
    id: null,
    todo: "",
  });

  const [todoDisplayOnInputField, setTodoDisplayOnInputField] = useState("");

  const handleChange = (e) => {
    setTodoList({
      ...todoList,
      id: todoArrayFromStore.length + 1,
      todo: e.target.value,
    });
    setTodoDisplayOnInputField(e.target.value);
  };

  const handleTodoAdd = () => {
    dispatch(add_Todo(todoList));
    setTodoDisplayOnInputField("");
  };

  return (
    <>
      <div className="todo-container">
        {/* <div>
          {count} <span>This is my current count</span>
          <br />
          <br />
          <button onClick={() => dispatch(add())}>Increment Number</button>
          <button onClick={() => dispatch(sub())}>Decrement Number</button>
        </div> */}
        <div>
          <h3>
            : <span>Add Todo of the day</span> :
          </h3>

          <input
            type="text"
            placeholder="Add Todos of the day"
            onChange={handleChange}
            value={todoDisplayOnInputField}
          />
          <button onClick={handleTodoAdd}>Add Todo</button>
        </div>
      </div>
    </>
  );
};

export default Todo;
