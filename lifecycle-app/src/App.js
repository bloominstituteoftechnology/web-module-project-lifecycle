import React from 'react';
import axios from 'axios';
import './App.css';
import User from './components/User'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      title: 'GitHub',
      user: {},
      followers: []
    }
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/MinaMonsi')
    .then(res => {
      console.log(res);
      this.setState({
        ...this.state,
        user: res.data
      })//happy path
    })
    .catch(err => console.log(err));//sad path
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.title}</h1>
        </header>
        <User user ={this.state.user} />
      </div>
    );

  }
}

export default App;
