import React, { Component } from 'react'

class Form extends Component {
  state = {
    inputpokemon: ''
  }

  _handleChange = (e) => {
    this.setState ({ inputpokemon: e.target.value})
  }
  _handleSubmit = (e) => {
    e.preventDefault()
    // alert(this.state.inputpokemon)
    // const { inputpokemon } = this.state
    const input = this.state.inputpokemon
    const name = this.state.url
    // for ( input === this.state.name ){
    //   console.log ('hola')
    // }
  }
  render () {
  return (
    <form onSubmit={this._handleSubmit}>
    <div>    
      <input type="text" className='Find pokemon input' onChange={this._handleChange}></input>
      <button>Search</button>
    </div>
    </form>
  )
}
}


export default Form;