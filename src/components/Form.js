import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

const API_KEY = '964'
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
    const { inputMovie } = this.state
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputMovie}`)
    .then(res => res.json())
    .then(results => {
      console.log(results)
      // const { Search = [], totalResults = "0" } = results
      // console.log({ Search, totalResults })
      // this.props.onResults(Search)
    })  
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