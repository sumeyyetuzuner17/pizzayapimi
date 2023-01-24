import "../index.css";
import Button from "./button/button";

function App() {
  return (
    <div className="wrapper">
      <Button text="çanakkale" action={() => console.log("çanakkale")} />
      <Button text="çankırı" action={() => console.log("çankırı")}/>
      
    </div>
  );
}

export default App;
