import { useContext } from "react";
import "./index.css";
import { TodoContext } from "./Contexts/TodoContext";
import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/Todoitem";
function App() {
  const { todos } = useContext(TodoContext);

  return (
    <div className="app">
      <h1>My TODO list</h1>
      <TodoForm />
      <div className="todo-list">
        {todos.length === 0 ? (
          <p>No todos yet! </p>
        ) : (
          todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        )}
      </div>
    </div>
  );
}

export default App;
