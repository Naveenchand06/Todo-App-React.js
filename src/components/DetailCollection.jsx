import React from "react";
import { useLocation } from "react-router-dom";

function DetailCollection(props) {
  const { state } = useLocation();
  const data = state.todoData;

  return (
    <div className="todo-detail-container">
      <h2>{data.title}</h2>

      {data.list.map((todo) => {
        return (
          <div className="todo-list-card">
            <input
              type="checkbox"
              id={data.id}
              name="vehicle1"
              value="Bike"
            ></input>
            <p>{todo.todoTitle}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DetailCollection;
