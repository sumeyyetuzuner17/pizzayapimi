import React from "react";
import "./tekhazirpizza.css";
import "../data";

const Tekhazirpizza = (props) => {
  return (
    <>
      <div>{props.pizza.isim}</div>
      <div>{props.pizza.icindekiler}</div>
      <div>{props.pizza.boyut}</div>
      <div>{props.pizza.fiyat}</div>
      <img src={props.pizza.url} alt=" " />
    </>
  );
};

export default Tekhazirpizza;
