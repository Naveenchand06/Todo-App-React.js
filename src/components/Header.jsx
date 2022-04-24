import React from "react";
// import { GrAddCircle } from "react-icons/gr";
import { RiAddCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <h2>Todo App</h2>
      <div className="icon-container">
        <RiAddCircleLine
          className="icon-holder"
          onClick={() => console.log("icons Tapped")}
        />
        <Link to="/about">
          <h4>About</h4>
        </Link>
      </div>
    </div>
  );
}

export default Header;
