import React, {Component} from 'react'

export default class PokemonCard extends Component {
  constructor(props){
    super(props)
  }
 
  render() {
    const {name, url} = this.props
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <div className="card">
    <h5 className="card-header">{name}</h5>
    {/* <h5>{order}</h5> */}
        </div>
      </div>
    )
  }
}