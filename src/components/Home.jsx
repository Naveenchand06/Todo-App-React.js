import TodoCard from "./TodoCard";
import React, { useContext, useEffect } from "react";
import TodoContext from "../context/TodoContext";

function Home() {
  const { allTodos } = useContext(TodoContext);

  return (
    <div className="container">
      <div className="cards-holder">
        {allTodos.map((todo) => {
          return <TodoCard key={todo.id} todoData={todo} />;
        })}
      </div>
    </div>
  );
}

export default Home;
