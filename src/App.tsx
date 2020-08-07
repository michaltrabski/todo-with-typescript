import React from "react";
import TodoListItem from "./components/TodoListItem";

const todos: Array<Todo> = [
  { text: "xxxxxxxx", complete: true },
  { text: "yyyyyyyy", complete: false },
  { text: "zzzzzzzz", complete: false },
];
const App: React.FC = () => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem todo={todo} />
      ))}
    </div>
  );
};

export default App;
