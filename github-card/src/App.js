import React, { Component } from 'react'
import axios from 'axios'
import './App.css';
import CardMaker from './components/CardMaker'

class App extends Component {
  constructor() {
      super();
      this.state = {
        data: '',
        followers: ''
      }
  }
  
  componentDidMount() {
    axios
      .get('https://api.github.com/users/Purefallen11')
      .then(res => {
        this.setState({ data: res.data })
      }).catch(err => {
      console.log(err)
      })
  }
  componentDidMountagain() {
    axios
    .get('https://api.github.com/users/Purefallen11/followers')
        .then(response => {
          this.setState({ followers: response.data })
        }).catch(errors => {
        console.log(errors)
      })
  }

      render () {
        return (
          <div>
            <CardMaker data={this.state.data}/>
          </div>
          )
      }

}


export default App;
