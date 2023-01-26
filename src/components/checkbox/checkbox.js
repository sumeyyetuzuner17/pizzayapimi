import React, { useState } from "react";
import "./checkbox.css";
import "../dataMalzemeler";

const Checkbox = (props) => {
  // const [malzeme1, setMalzeme1] = useState(false);
  const [ingredients, setIngredients] = useState({
    Mozarella: false,
    Mısır: false,
    Mantar: false,
    Zeytin: false,
    Sucuk: false,
    Sosis: false,
    Jambon: false,
    Füme: false,
  });

  return (
    <div>
      <label for="malzeme">
        <p>{setIngredients}</p>
        <input type="checkbox"></input> {props.deger}
      </label>
    </div>
  );
};

export default Checkbox;
