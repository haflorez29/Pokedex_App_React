import React, {Component} from 'react'

export default class PokemonCard extends Component {
  constructor(props){
    super(props)
  }
 
  render() {
    const {name, url, imagen, number,type} = this.props
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <div className="card">
          <div className="row">
        <h5 className="card-header col-9">{name}</h5>
        <div className="card-header col-3 row">{number}</div>
        </div>
        <img src={imagen}></img>
        <p>{type}</p>
        </div>
      </div>
    )
  }
}