import React, { useState } from "react";
import "./ikinciSayfa.css";
import { dataMalzemeler } from "../dataMalzemeler";
import Checkbox from "../checkbox/checkbox";
import Button from "../button/button";

const IkinciSayfa = () => {
  const [ingredients, setIngredients] = useState(
    dataMalzemeler.map((malzeme) => {
      return { ...malzeme, isChecked: false };
    })
  );

  const toggleIngredient = (isim) => {
    const newIngredients = ingredients.map((ingredient) => {
      if (ingredient.isim === isim) {
        return { ...ingredient, isChecked: !ingredient.isChecked };
      } else {
        return { ...ingredient };
      }
    });
    setIngredients(newIngredients);
  };

  return (
    <>
      <p>PİZZANI KENDİN YAP</p>
      <div className="radio">
        <div className="pizzaBoyutu">
          <p>Pizza Boyutu</p>
          <form>
            <div>
              <label for="kucuk">
                Küçük
                <input
                  type="radio"
                  name="pizzaBoyutu"
                  value="Küçük"
                  id="kucuk"
                />
              </label>
            </div>
            <div>
              <label for="orta">
                Orta
                <input type="radio" name="pizzaBoyutu" value="Orta" id="orta" />
              </label>
            </div>
            <div>
              <label for="buyuk">
                Büyük
                <input
                  type="radio"
                  name="pizzaBoyutu"
                  value="Büyük"
                  id="Buyuk"
                />
              </label>
            </div>
          </form>
        </div>

        <div className="hamurKalinligi">
          <p> Hamur Kalınlığı </p>
          <form>
            <div>
              <label for="ince">
                İnce
                <input type="radio" name="pizzaBoyutu" value="İnce" id="ince" />
              </label>
            </div>
            <div>
              <label for="orta">
                Orta
                <input type="radio" name="pizzaBoyutu" value="Orta" id="orta" />
              </label>
            </div>
            <div>
              <label for="kalin">
                Kalın
                <input
                  type="radio"
                  name="pizzaBoyutu"
                  value="Kalın"
                  id="kalin"
                />
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="icecek">
        <p>İçecekler</p>
        <form>
          <label>
            <select value="" name="">
              <option value="">--İçeceğini seç--</option>
              <option value="kola">Kola</option>
              <option value="fanta">Fanta</option>
              <option value="gazoz">Gazoz</option>
              <option value="ayran">Ayran</option>
            </select>
          </label>
        </form>
      </div>
      <div className="malzemeler">
        <form>
          <p>Malzemeler</p>
          {ingredients.map((ingredient) => {
            return (
              <Checkbox {...ingredient} toggleIngredient={toggleIngredient} />
            );
          })}
        </form>
      </div>
      <div className="kendinYap">
        <Button text="Tutar" type="submit" />
        <Button text="Siparişi Oluştur" type="submit" />
      </div>
    </>
  );
};

export default IkinciSayfa;
