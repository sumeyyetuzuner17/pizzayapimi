import React, { useState } from "react";
import "./checkbox.css";
import "../dataMalzemeler";

const Checkbox = (props) => {
  return (
    <div
      onClick={() => {
        props.toggleIngredient(props.isim);
      }}
    >
      <input type="checkbox" checked={props.isChecked} />
      <label htmlFor="malzeme">{props.isim}</label>
    </div>
  );
};

export default Checkbox;
