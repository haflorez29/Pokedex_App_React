import React, { Component } from 'react'


class Form extends Component {
  state = {
    inputMovie: ''
  }

  _handleChange = (e) => {
    this.setState ({ inputMovie: e.target.value})
  }
  _handleSubmit = (e) => {
    e.preventDefault()
    alert(this.state.inputMovie)
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