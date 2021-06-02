  import React from 'react'
import './App.css';
import styled from 'styled-components'
import axios from 'axios'
import UserCard from './Components/UserCard'
import Followers from './Components/Followers'

class App extends React.Component {
  
  state = {
    user:'AnthonyMillerGit',
    userInfo:[],
    followersArray: []
  }
  

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.user}`)
    .then(res => {
      this.setState({
        userInfo: res.data
      })
      console.log("this is first", res.data)
    })
    .catch(error => {
      console.log(error)
    })

  axios.get(`https://api.github.com/users/${this.state.user}/followers`)
  .then(res => {
    console.log('this is second', res.data)
    const followers = []
    res.data.forEach(e => {
      followers.push(e.login)
    })
    this.setState({followersArray: followers})
  })
  .catch(err => {
    console.log(err)
  })
}

  render() {
  return (
    <div>
      <div>
      <input />
        <button>Search User</button>
      </div>
      <UserCard userInfo={this.state.userInfo}/>
      <Followers followersArray={this.state.followersArray}/>
    </div>
  );
}
}

export default App;
