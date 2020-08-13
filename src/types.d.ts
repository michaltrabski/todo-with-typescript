type Todo = {
  text: string;
  complete: boolean;
};

type ToogleTodo = (a: Todo) => void;

interface TodoListItemProps {
  todo: Todo;
  toogleTodo: ToogleTodo;
}
