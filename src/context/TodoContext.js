import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "React",
      list: [
        {
          todoTitle: "Learn React",
          completed: false,
        },
      ],
    },
    {
      id: 2,
      title: "Nodejs",
      list: [
        {
          todoTitle: "Learn Nodejs",
          completed: false,
        },
        {
          todoTitle: "Learn MongoDB",
          completed: true,
        },
      ],
    },
    {
      id: 3,
      title: "Angular JS",
      list: [
        {
          todoTitle: "Learn Angular",
          completed: false,
        },
        {
          todoTitle: "Learn Angular Material",
          completed: true,
        },
        {
          todoTitle: "Learn Web3.js",
          completed: true,
        },
      ],
    },
  ]);

  const handleCheckbox = (id, itemIndex) => {
    const changed = todos;
    console.log(todos);
  };

  return (
    <TodoContext.Provider value={{ todos, handleCheckbox }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
