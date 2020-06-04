import React, { Component } from 'react'
import PokemonList from '../pokemon/Pokemon_List'

class Form extends Component {
  state = {
    inputMovie: ''
  }

  _handleChange = (e) => {
    this.setState ({ inputMovie: e.target.value})
  }
  _handleSubmit = (e) => {
    e.preventDefault()
    // alert(this.state.inputMovie)
    // const { inputMovie } = this.state
    const input = this.state.inputMovie
    const name = this.state.url
  
    // for ( input === this.state.name ){
    //   console.log ('hola')
    // }
  }
  render () {
  return (
    <form onSubmit={this._handleSubmit}>
    <div>    
      <input type="text" className='Find pokemon' onChange={this._handleChange}></input>
      <button>Search</button>
    </div>
    </form>
  )
}
}


export default Form;