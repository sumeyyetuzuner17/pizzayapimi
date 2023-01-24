import React, { useState } from "react";
import "./button.css";

const Button = (props) => {
  const [counter, setCounter] = useState(0);
  return (
    <button
      className="btn black"
      onClick={() => {
        props.action();
        setCounter(counter+1);
      }}
    >
      { `${props.text} ${counter}` }
    </button>
  );
};

export default Button;
