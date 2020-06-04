import React, {Component} from 'react'

export default class PokemonCard extends Component {
  state ={
    name: "",
    imageUrl: "",
    pokemonIndex: "",
  }

  componentDidMount ( ) {
    const {name, url} = this.props;
    const pokemonIndex = url.split('/')[url.split('/').lenght -2];
    const imageUrl = `./sprites/pokemon/${pokemonIndex}.png`;

    this.setState({ name, imageUrl, pokemonIndex });
  }
  render() {
    
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <div className="card">
        <h5 className="card-header">{this.state.name}</h5>
        </div>
      </div>
    )
  }
}