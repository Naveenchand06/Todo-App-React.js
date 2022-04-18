import TodoCard from "./TodoCard";

import React from "react";

function Home() {
  return (
    <div className="container">
      <div className="cards-holder">
        <TodoCard data="Todo 1" />
        <TodoCard data="Todo 2" />
        <TodoCard data="Todo 3" />
        <TodoCard data="Todo 4" />
        <TodoCard data="Todo 5" />
        <TodoCard data="Todo 6" />
      </div>
    </div>
  );
}

export default Home;
