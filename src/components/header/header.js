import React from "react";
import "./header.css";
import Buttonilk from "../buttonilk/buttonilk";

const header = (props) => {
  const logourl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqKC9qKJafAQ6kDuZ8gNKrqpcR3l6IDZR2VQCdoL-sQ&s";
  const bigImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPpXCtOFMN7ZV5e-1Pq7XkQIFGSaGOt5RacA&usqp=CAU";

  return (
    <>
      <div className="header">
        <img src={logourl} alt="logo" />
        <div>
          <p>{props.text}</p>
        </div>
        <Buttonilk text="Bize Ulaşın" />
      </div>
      <div>
        <img src={bigImg} alt="bigImg" />
      </div>
    </>
  );
};

export default header;
