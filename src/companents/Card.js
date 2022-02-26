import React from "react";
import "./Card.css";

const Card = ({ name, id, pic, children }) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <p>{id}</p>
      {pic.showing ?
        <img  className="pokemon-img" alt="pokemon-img" src={pic.url} />
      : null}
      <div className="ball-wrapper">{children}</div>
    </div>
  );
};

export default Card;
