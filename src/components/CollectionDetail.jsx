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

      {data.list.map((oneTodo) => {
        return (
          <div className={`todo-list-card`} key={oneTodo.id}>
            <input
              className="todo-checkbox"
              type="checkbox"
              id={oneTodo.id}
              name={oneTodo.Title}
              value={oneTodo.todoTitle}
              onChange={() =>
                handleCheckbox(data.id, data.list.indexOf(oneTodo))
              }
              checked={oneTodo.completed}
            ></input>
            <p>{oneTodo.todo}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CollectionDetail;
