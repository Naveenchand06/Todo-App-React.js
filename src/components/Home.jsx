import TodoCard from "./TodoCard";

import { React, useState } from "react";

function Home() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "React",
      list: [
        {
          todoTitle: "Learn React",
          completed: false,
        },
      ],
    },
    {
      id: 2,
      title: "Nodejs",
      list: [
        {
          todoTitle: "Learn Nodejs",
          completed: false,
        },
        {
          todoTitle: "Learn MongoDB",
          completed: false,
        },
      ],
    },
  ]);

  return (
    <div className="container">
      <div className="cards-holder">
        {todos.map((todo) => {
          return <TodoCard key={todo.id} todoData={todo} />;
        })}
      </div>
    </div>
  );
}

export default Home;
