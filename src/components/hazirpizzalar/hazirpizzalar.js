import React from "react";
import Tekhazirpizza from "../tekhazirpizza/tekhazirpizza";
import { data } from "../data";
import "./hazirpizzalar.css";

const Hazirpizzalar = () => {
  return (
    <div className="hazirPizzalar">
      <p> HAZIR PİZZALAR</p>

      <div>
        {data.map((pizza) => (
          <Tekhazirpizza pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default Hazirpizzalar;
