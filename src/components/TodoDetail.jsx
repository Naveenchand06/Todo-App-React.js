import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import TodoContext from "../context/TodoContext";

function TodoDetails() {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState(null);
  const params = useParams();
  const { allTodos } = useContext(TodoContext);

  useEffect(() => {
    allTodos.map((item) => {
      if (item.title == params.name) {
        setTodo(item);
        setLoading(false);
        console.log(item);
        return;
      }
    });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="todo-detail-container">
      <h2>{todo.title}</h2>

      {todo.todoList.map((oneTodo) => {
        return (
          <div className={`todo-list-card`} key={oneTodo.todoId}>
            <input
              className="todo-checkbox"
              type="checkbox"
              id={oneTodo.todoId}
              name={oneTodo.Title}
              value={oneTodo.completed}
              onChange={() => (oneTodo.completed = !oneTodo.completed)}
              checked={oneTodo.completed}
            ></input>
            <p>{oneTodo.todo}</p>
          </div>
        );
      })}
    </div>
  );
}

export default TodoDetails;
