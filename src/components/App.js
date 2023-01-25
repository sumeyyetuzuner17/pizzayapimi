import "./App.css";
// import "../index.css";
// import Button from "./button/button";
import Header from "./header/header";
import Button from "./button/button";
import PizzaAll from "./pizzaAll/pizzaAll";
import IkinciSayfa from "./ikinciSayfa/ikinciSayfa";

function App() {
  return (
    <>
      {/* <div className="wrapper">
        <Button text="çanakkale" action={() => console.log("çanakkale")} />
        <Button text="çankırı" action={() => console.log("çankırı")} />
      
      </div> */}
      <div className="app">
        <Header text="BİLMEMNE PİZZA" />
        <div className="kendinYap">
          <Button text="PİZZANI KENDİN YAP" type="submit" />
        </div>
        <PizzaAll />
        <IkinciSayfa/>
      </div>
    </>
  );
}

export default App;
