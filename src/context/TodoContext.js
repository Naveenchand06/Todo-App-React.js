import { createContext, useReducer } from "react";
import { TodoReducer } from "./TodoReducer";

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const initialState = {
    allTodos: [
      {
        id: 1,
        title: "React",
        list: [
          {
            id: 1,
            todo: "Learn React",
            completed: false,
          },
        ],
      },
      {
        id: 2,
        title: "Nodejs",
        list: [
          {
            id: 1,
            todo: "Learn Nodejs",
            completed: false,
          },
          {
            id: 2,
            todo: "Learn MongoDB",
            completed: true,
          },
        ],
      },
      {
        id: 3,
        title: "Angular JS",
        list: [
          {
            id: 1,
            todo: "Learn Angular",
            completed: false,
          },
          {
            id: 2,
            todo: "Learn Angular Material",
            completed: true,
          },
          {
            id: 3,
            todo: "Learn Web3.js",
            completed: true,
          },
        ],
      },
    ],
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const handleCheckbox = (id, itemIndex) => {
    state.allTodos.map((data) => {
      if (data.id === id) {
        console.log(data.list[itemIndex]);
        console.log(data.list[itemIndex].completed);
      }
    });
  };

  return (
    <TodoContext.Provider value={{ allTodos: state.allTodos, handleCheckbox }}>
      {console.log(state.allTodos)}
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
