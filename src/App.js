import React, { Component } from "react";
import "./App.css";
import Card from "./companents/Card";
import Ball from "./companents/Ball";
class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {},
    };
  }

  getRandomPokemon() {
    var ramdomNum = Math.floor(Math.random() * 807);
    fetch(
      "https://pokeapi.co/api/v2/pokemon/" + ramdomNum,
      "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/" + ramdomNum + ".svg"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          pokemon: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
// on click change css style of pokeball from big to small and 
// put it at the right corner of the Card

  onClickBall = () => {
    const pokeball = document.querySelector(".pokeball");
    pokeball.classList.toggle("small");
    this.getRandomPokemon();
  };

  //adding pokemon photo to the card
  // TODO:
  // 1. adding url photo (https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/+randomNum) to the pokemon propirty
  // 2. 

  render() {
    const pokemon = this.state.pokemon;
    return (
      <div className="App">
        <header className="App-header">
          <Card {...pokemon}>
            <Ball clickedBall={this.onClickBall} />
          </Card>
        </header>
      </div>
    );
  }
}

export default App;
