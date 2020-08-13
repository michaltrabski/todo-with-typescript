import React, { useState } from "react";
import TodoListItem from "./components/TodoListItem";

const itinialTodos: Array<Todo> = [
  { text: "xxxxxxxx", complete: true },
  { text: "yyyyyyyy", complete: false },
  { text: "zzzzzzzz", complete: false },
];
const App: React.FC = () => {
  const [todos, setTodos] = useState(itinialTodos);

  const toogleTodo: ToogleTodo = (selectetTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectetTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem todo={todo} toogleTodo={toogleTodo} />
      ))}
    </div>
  );
};

export default App;
