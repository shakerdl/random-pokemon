import React from "react";
import './Card.css'

const Card = ({name,id,photo,children}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{id}</p>
      <img src = {photo} />
      <div className="ball-wrapper">
          {children}
      </div>
    </div>
  );
};

export default Card;
{/* <p>{currPokemon.types[0].type.name}</p> */}