import { createContext, useReducer } from "react";
import { TodoReducer } from "./TodoReducer";

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const initialState = {
    allTodos: [
      {
        id: 1,
        title: "React",
        todoList: [
          {
            todoId: 1,
            todo: "Learn React",
            completed: false,
          },
        ],
      },
      {
        id: 2,
        title: "Nodejs",
        todoList: [
          {
            todoId: 1,
            todo: "Learn Nodejs",
            completed: false,
          },
          {
            todoId: 2,
            todo: "Learn MongoDB",
            completed: true,
          },
        ],
      },
      {
        id: 3,
        title: "Angular JS",
        todoList: [
          {
            todoId: 1,
            todo: "Learn Angular",
            completed: false,
          },
        ],
      },
    ],
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  return (
    <TodoContext.Provider value={{ allTodos: state.allTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
