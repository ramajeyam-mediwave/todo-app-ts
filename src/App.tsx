import { useState } from "react";

interface ITodo {
  id: Number;
  text: string;
}

// const myTodo: ITodo = { id: 123, text: "Clean my room" };
// const myTodoArray: ITodo[] = [];
// myTodoArray.push({
//   id: 123,
//   text: "Wash clothers",
// });

function App() {
  // const [name, setName] = useState("ram");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const [text, setText] = useState("");

  // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   setText(e.target.value)
  // }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const obj = {
      id: new Date().getTime(),
      text: text,
      isDone: false,
    };
    // setTodos((prev) => {
    //   const items = [...prev];
    //   items.push(obj);
    //   return items;
    // });

    setTodos((prev) => [...prev, obj]);

    setText("");
  }

  return (
    <div>
      <h1>my todos</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>

      <ul>
        {todos.map((t) => (
          <li key={t.id.toString()}>{t.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
