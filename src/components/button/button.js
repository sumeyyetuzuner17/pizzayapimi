import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <div>
      <button type="submit" className="button-iletisim">
        {props.text}
      </button>
    </div>
  );
};

export default Button;
