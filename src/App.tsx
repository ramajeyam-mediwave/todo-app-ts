import { useState } from "react";

import { ITodo } from "./types";

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

// const myTodo: ITodo = { id: 123, text: "Clean my room" };
// const myTodoArray: ITodo[] = [];
// myTodoArray.push({
//   id: 123,
//   text: "Wash clothers",
// });

function App() {
  // const [name, setName] = useState("ram");
  const [todos, setTodos] = useState<ITodo[]>([]);

  // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   setText(e.target.value)
  // }

  function onTodoAdd(str: string) {
    const obj: ITodo = {
      text: str,
      id: new Date().getTime(),
    };
    setTodos((prev) => [...prev, obj]);
  }

  return (
    <div>
      <h1>my todos</h1>
      <AddTodo onTodoAdd={onTodoAdd} />
      <TodoList todos={todos} extraCss="text-bold" />
    </div>
  );
}

export default App;
