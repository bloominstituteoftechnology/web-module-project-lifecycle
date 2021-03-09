import React from 'react'
import './App.css';
import UserCard from './Component/UserCard'
import axios from 'axios'

class App extends React.Component{
    state = {
      user: "monicascz",
    }

    componentDidMount(){

    }

  render(){
    return(
      <>
        <h1>Git Hub User Card</h1>
        <UserCard/>
      </>
    )
  }
}
export default App;
