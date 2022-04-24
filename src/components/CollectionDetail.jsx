import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TodoContext from "../context/TodoContext";

function CollectionDetail() {
  const { state } = useLocation();
  const { handleCheckbox } = useContext(TodoContext);
  const data = state.todoData;

  return (
    <div className="todo-detail-container">
      <h2>{data.title}</h2>

      {data.list.map((todo) => {
        return (
          <div className={`todo-list-card`}>
            <input
              className="todo-checkbox"
              type="checkbox"
              id={data.id}
              name={todo.Title}
              value={todo.todoTitle}
              onChange={handleCheckbox}
              checked={todo.completed}
            ></input>
            <p>{todo.todoTitle}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CollectionDetail;
