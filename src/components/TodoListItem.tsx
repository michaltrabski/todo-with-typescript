import * as React from "react";

const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  return (
    <li>
      <label className={false ? "true" : undefined} htmlFor="todoInput">
        {todo.text}
      </label>
      <input id="todoInput" type="checkbox" checked={todo.complete} />
    </li>
  );
};

export default TodoListItem;
