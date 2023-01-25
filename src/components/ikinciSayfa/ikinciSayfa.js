import React from "react";
import "./ikinciSayfa.css";
import { dataMalzemeler } from "../dataMalzemeler";
import Checkbox from "../checkbox/checkbox"

const IkinciSayfa = () => {
  return (
    <>
      <div>
        Pizza Boyutu
        <input type="radio" name="pizzaBoyutu" value="Küçük" />
        <input type="radio" name="pizzaBoyutu" value="Orta" />
        <input type="radio" name="pizzaBoyutu" value="Büyük" />
      </div>
      <div>
        Hamur Kalınlığı
        <input type="radio" name="pizzaBoyutu" value="İnce" />
        <input type="radio" name="pizzaBoyutu" value="Orta" />
        <input type="radio" name="pizzaBoyutu" value="Kalın" />
      </div>
      <div>
        Malzemeler
        {dataMalzemeler.map((malzeme)=>
        <Checkbox malzeme={malzeme}/>

        )}
      </div>
    </>
  );
};

export default IkinciSayfa;
