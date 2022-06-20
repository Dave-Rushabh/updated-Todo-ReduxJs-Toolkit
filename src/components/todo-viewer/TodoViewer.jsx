import React from "react";
import "./TodoViewer.css";
import { useSelector, useDispatch } from "react-redux";
import {
  remove_Todo,
  complete_Todo,
  remove_CompletedTodo,
} from "../../store/reducers/todo";

const TodoViewer = () => {
  const allTodo = useSelector((state) => state.todoReducer.todoList);
  const completedTodo = useSelector((state) => state.todoReducer.completedTodo);
  const dispatch = useDispatch();

  const handleDelete = (todo) => {
    dispatch(remove_Todo(todo));
    dispatch(remove_CompletedTodo(todo));
  };

  const handleCheckbox = (e, todo) => {
    if (e.target.checked) {
      dispatch(complete_Todo(todo));
    } else {
      dispatch(remove_CompletedTodo(todo));
    }
  };

  const countOfCompleted = completedTodo.length;
  const completionRate = Math.round((countOfCompleted / allTodo.length) * 100);

  return (
    <>
      <div className="todo-viewer">
        <h3>
          : <span>My Todo of the day</span> :
        </h3>
        <hr />
        {allTodo.map((todo) => (
          <div key={todo.id}>
            <span>{`${todo.id}.)`}</span> {todo.todo}
            <span style={{ marginLeft: "20px" }}>
              <button onClick={() => handleDelete(todo)}>Delete</button>
            </span>
            <span style={{ marginLeft: "20px" }}>
              <input
                type="checkbox"
                id="complete"
                value="ok"
                onChange={(e) => handleCheckbox(e, todo)}
              />
              <label htmlFor="complete">Mark as completed</label>
              <br />
            </span>
            <hr />
          </div>
        ))}

        <div style={{ marginTop: "80px" }}>
          <h3>
            : <span>Completed Tasks</span> :
            {completedTodo.length > 0 && (
              <span style={{ marginLeft: "20px" }}>
                {`${completionRate}`} % Completed
              </span>
            )}
          </h3>

          <hr />
          {completedTodo.map((todo) => (
            <div key={todo.id}>
              <span>{`${todo.id}.)`}</span> {todo.todo}
              <hr />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoViewer;
