import React from "react";
// import { GrAddCircle } from "react-icons/gr";
import { RiAddCircleLine } from "react-icons/ri";

function Header() {
  return (
    <div className="header-container">
      <h2>Todo App</h2>
      <RiAddCircleLine
        className="icon-holder"
        onClick={() => console.log("icons Tapped")}
      />
    </div>
  );
}

export default Header;
