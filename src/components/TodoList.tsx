import { ITodo } from "../types";

interface ITodoList {
  todos: ITodo[];
  extraCss?: string;
}

const TodoList: React.FC<ITodoList> = ({ todos, extraCss }) => {
  return (
    <ul className={extraCss}>
      {todos.map((t) => (
        <li key={t.id.toString()}>{t.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
