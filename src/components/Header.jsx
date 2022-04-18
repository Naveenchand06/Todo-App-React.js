import React from "react";
// import { GrAddCircle } from "react-icons/gr";
import { RiAddCircleLine } from "react-icons/ri";

function Header() {
  return (
    <div className="header-container">
      <h2>Todo App</h2>
      <div className="icon-container">
        <RiAddCircleLine
          className="icon-holder"
          onClick={() => console.log("icons Tapped")}
        />
      </div>
    </div>
  );
}

export default Header;
