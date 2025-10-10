import { useContext, useState } from "react";
import { TodoContext } from "../Contexts/TodoContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo, toggleTodo, updateTodo } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(todo.id, text);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.text}
        </span>
      )}
      <div className="actions">
        <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
        <button onClick={() => setIsEditing(!isEditing)}>✏️</button>
      </div>
    </div>
  );
};

export default TodoItem;
