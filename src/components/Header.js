import React from 'react'
import Title from '../components/Title'
import Form from '../components/Form'


const Header = ({children}) =>{
  return ( 
  <div>
  <Title>Search your pokemon</Title>
  <Form></Form>
  </div>
  )
};

export default Header;