import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "../Components/Layout/Navbar";
import Dashboard from "../Components/Layout/Dashboard"
import '../style/App.css'

class App extends Component {
  
  render(){
  return (
    <React.Fragment>      
    <Navbar></Navbar>
    <div className="container App">
      <Dashboard/>
    </div>   
    </React.Fragment>
  );
  }
}

export default App;
