import React from 'react'
import Form from './Components/Form'
import Friend from './Components/Friends'
import './App.css';

class App extends React.Component{
  state = {
    friends: []

  }

  render() {
    return(
      <div>
        <h1>I'm alive</h1>
        <div className='formContainer'>
          <Form />
        </div>
        <div className='friendContainer'>
          <Friend />
        </div>
      </div>
    )
  }
}

export default App;
