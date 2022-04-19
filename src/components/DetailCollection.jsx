import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TodoContext from "../context/TodoContext";

function DetailCollection() {
  const { state } = useLocation();
  const data = state.todoData;

  const { handleCheckbox } = useContext(TodoContext);
  useEffect(() => {}, [data]);

  return (
    <div className="todo-detail-container">
      <h2>{data.title}</h2>

      {data.list.map((todo) => {
        return (
          <div className={`todo-list-card ${todo.completed && "strike-todo"}`}>
            <input
              className="todo-checkbox"
              type="checkbox"
              id={data.id}
              name={todo.Title}
              value={todo.todoTitle}
              onChange={() => handleCheckbox(data.id, data.list.indexOf(todo))}
              checked={todo.completed}
            ></input>
            <p>{todo.todoTitle}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DetailCollection;
