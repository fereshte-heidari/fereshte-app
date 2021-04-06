import React from "react";

const UserInput = (props) => {
  const style = {
    backgroundColor: "lightblue",
    width: "20%",
    margin: "auto",
  };
  return (
    <input style={style} onChange={props.babeHand} value={props.username} />
  );
};

export default UserInput;
