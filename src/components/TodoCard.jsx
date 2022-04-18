import React from "react";
import { Link, useNavigate } from "react-router-dom";

function TodoCard({ todoData }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    console.log("card clicked");
    navigate(`/todo/${todoData.title}`, { state: { todoData } });
  };

  return (
    // <Link
    //   to={{
    //     pathname: `/todo/${todoData.title}`,
    //     state: {
    //       todoData: todoData,
    //     },
    //   }}
    //   className="card-link-style"
    // >
    <div className="card" onClick={handleCardClick}>
      <h2>😀</h2>
      <h3>{todoData.title}</h3>
      <p>Total Todos: {todoData.list.length}</p>
    </div>
    // </Link>
  );
}

TodoCard.defaultProps = {
  data: "Todo Collection Name",
};

export default TodoCard;
