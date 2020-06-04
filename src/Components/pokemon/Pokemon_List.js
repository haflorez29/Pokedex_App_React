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
    const type = [] 
    type[0]=[0]
    console.log(type)
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
              imagen ={pokemon.sprites.front_default} 
              number = {pokemon.order}  
              type = {type.types}        
              />
            ))}
          </div>
        ) : (
          <h1>Loading pokemon</h1>
        )}
      </div>
      
      </div>
    );
  }
}
