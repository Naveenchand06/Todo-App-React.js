import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import DetailCollection from "./components/DetailCollection";
import { TodoContextProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<div>About page</div>}></Route>
          <Route path="/todo/:name" element={<DetailCollection />}></Route>
        </Routes>
      </Router>
    </TodoContextProvider>
  );
}

export default App;
