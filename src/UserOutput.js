import React from "react";
import "./UserOutput.css";
const UserOutput = (props) => {
  return (
    <div className="output">
      <p>Hello {props.username}</p>
      <p>Bye</p>
    </div>
  );
};

export default UserOutput;
