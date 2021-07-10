import React from 'react'
import axios from 'axios'
import UserCard from './Components/UserCard'
import FollowerCard from './Components/FollowerCard'
import './App.css';


  export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      user: {},
      followers: []
    }
  }
  componentDidMount() {//user
    axios
    .get('https://api.github.com/users/cynthia-coronado')
    .then(response => {
      this.setState({...this.state, user: response.data})
      console.log(response)
    })
    .catch(error => {
      console.log('User Error')
    })
  
  axios //follower
    .get('https://api.github.com/users/cynthia-coronado/followers')
    .then(response => {
      this.setState({...this.state, followers: response.data})
      console.log(response);
    })
    .catch(error => {
      console.log('Follower Error')
    })
 }

render() {
  return (
    <div className = 'appContainer'>
    <h1>Github</h1>
    </div>
  )
 }
}
