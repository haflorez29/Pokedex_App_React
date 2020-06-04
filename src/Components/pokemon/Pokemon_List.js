import React, { Component } from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";
import Form from "../pokemon/Form"

export default class Pokemon_List extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/?limit=25",
    pokemon: null,
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    const otro = res.data["results"]
    const array = [];
    // this.setState({pokemon: res.data["results"]});  
    console.log(otro)
    for(let i=0; i<otro.length; i++){
      const result = await axios.get(otro[i].url)
      const datajson = result.data
      array.push(datajson)
    }
   this.setState({pokemon: array});  
  }
  render() {
    console.log(this.state.pokemon)
    return (
      <div>
        <Form
        ></Form>
      <div>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map(pokemon => (
              <PokemonCard 
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}              
              />
            ))}
          </div>
        ) : (
          <h1>Loading pokemon</h1>
        )}
      </div>
      <ul className="pokemon__list">
                {this.props.pokedex
                    .filter(item => {
                        return item.name.toLowerCase().includes(this.props.pokemonName);
                    })
                    .sort((x, y) => x.id - y.id)
                    .map((item) => {
                        return (
                            <li className="pokemon__item" key={item.id}>
                                <PokemonItem item={item} />
                            </li>
                        );
                    })}
            </ul>
      </div>
    );
  }
}
