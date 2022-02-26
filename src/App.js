import React, { Component } from "react";
import "./App.css";
import Card from "./companents/Card";
import Ball from "./companents/Ball";
class App extends Component {
  constructor() {
    super();
    this.state = {
      pic: {
        url: "",
        showing: false,
      },
      pokemon: {},
    };
  }

  getRandomPokemon() {
    const ramdomNum = Math.floor(Math.random() * 807);
    fetch("https://pokeapi.co/api/v2/pokemon/" + ramdomNum)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          pokemon: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    this.getPokemonPhoto(ramdomNum);
  }
  // on click change css style of pokeball from big to small and
  // put it at the right corner of the Card

  onClickBall = () => {
    this.getRandomPokemon();
  };

  //adding pokemon photo to the card
  // TODO:
  // 1. adding url photo (https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/+randomNum) to the pokemon propirty
  // 2.
  getPokemonPhoto(num) {
    const pic = this.state.pic;
    if (num > 650) {
      pic.showing = false;
      this.setState({pic:pic})
    } else {
      const url = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${num}.svg`;
      pic.url = url;
      pic.showing = true;
      this.setState({ pic: pic });
    }
  }
  render() {
    const pokemon = this.state.pokemon;
    const pic = this.state.pic;
    return (
      <div className="App">
        <header className="App-header">
          <Card pic={pic} {...pokemon}>
            <Ball clickedBall={this.onClickBall} />
          </Card>
        </header>
      </div>
    );
  }
}

export default App;
