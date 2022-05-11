import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import TodoDetails from "./components/TodoDetail";
import { TodoContextProvider } from "./context/TodoContext";
import About from "./components/About";

function App() {
  return (
    <TodoContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/todo/:name" element={<TodoDetails />}></Route>
        </Routes>
      </Router>
    </TodoContextProvider>
  );
}

export default App;
