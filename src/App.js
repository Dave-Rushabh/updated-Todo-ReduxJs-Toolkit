import TodoViewer from "./components/todo-viewer/TodoViewer";
import Todo from "./components/todo/Todo";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Todo />
        <TodoViewer />
      </div>
    </>
  );
}

export default App;
