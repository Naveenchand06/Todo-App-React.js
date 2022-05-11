import React from "react";
import { Link, useNavigate } from "react-router-dom";

function TodoCard({ todoData }) {
  const navigate = useNavigate();

  return (
    <Link to={`/todo/${todoData.title}`} className="card-link-style">
      <div className="card">
        <h2>😀</h2>
        <h3>{todoData.title}</h3>
        <p>Total Todos: {todoData.todoList.length}</p>
      </div>
    </Link>
  );
}

TodoCard.defaultProps = {
  data: "Todo Collection Name",
};

export default TodoCard;
