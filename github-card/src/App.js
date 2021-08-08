import React, { Component } from 'react'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor() {
      super();
      this.state = {
        data: ''
      }
  }
  
  componentDidMount() {
    axios
      .get('https://api.github.com/users/Purefallen11')
      .then(res => {
        this.setState({ data: res.data })
        console.log(this.state)
      }).catch(err => {
      console.log(err)
    })
  }

      render () {
        return <div>hello world</div>
      }

}


export default App;
