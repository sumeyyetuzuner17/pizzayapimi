import "./App.css";
import "../index.css";
// import Button from "./button/button";
import Header from "./header/header";
import Buttonilk from "./buttonilk/buttonilk";
import Hazirpizzalar from "./hazirpizzalar/hazirpizzalar";

function App() {
  return (
    <>
      {/* <div className="wrapper">
        <Button text="çanakkale" action={() => console.log("çanakkale")} />
        <Button text="çankırı" action={() => console.log("çankırı")} />
      
      </div> */}
      <div>
        <Header text="BİLMEMNE PİZZA" />
        <Buttonilk text="PİZZANI KENDİN YAP"/>
        <Hazirpizzalar/>
      </div>
    </>
  );
}

export default App;
