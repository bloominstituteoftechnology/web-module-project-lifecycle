import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    user: {}
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/cal1x')
    .then(response => {
      this.setState({user: response.data})
      console.log(this.state.user)
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        Hello world
      </div>
    )
  }
}

export default App;