import React from "react";
import "./header.css";
import Button from "../button/button";

const header = (props) => {
  const logourl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqKC9qKJafAQ6kDuZ8gNKrqpcR3l6IDZR2VQCdoL-sQ&s";
  const bigImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPpXCtOFMN7ZV5e-1Pq7XkQIFGSaGOt5RacA&usqp=CAU";

  return (
    <>
      <div className="header">
        <img src={logourl} alt="logo" className="logo" />
        <div>
          <p>{props.text}</p>
        </div>
        <div>
          <Button text="Bize Ulaşın" />
        </div>
      </div>
      <div>
        <img src={bigImg} alt="bigImg" className="bigImg" />
      </div>
    </>
  );
};

export default header;
