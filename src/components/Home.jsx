import TodoCard from "./TodoCard";
import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";

function Home() {
  const { todos } = useContext(TodoContext);

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
