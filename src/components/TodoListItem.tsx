import * as React from "react";

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toogleTodo }) => {
  return (
    <li>
      <label
        className={todo.complete ? "line-through" : undefined}
        htmlFor={JSON.stringify(todo)}
      >
        {todo.text}
      </label>
      <input
        id={JSON.stringify(todo)}
        type="checkbox"
        checked={todo.complete}
        onClick={() => toogleTodo(todo)}
      />
    </li>
  );
};

export default TodoListItem;
