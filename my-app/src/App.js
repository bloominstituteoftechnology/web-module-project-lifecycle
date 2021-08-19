import React from 'react'
import axios from 'axios'
import './App.css'
import GithubCard from './components/GithubCard'
import FollowersCard from './components/FollowersCard'

// https://api.github.com/users/< Your github name >/followers

class App extends React.Component {
  state = {
    user: []
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/AshleyCoder3')
      .then(res => {
        this.setState({
          user: res.data
        })
      })
      .catch(err => console.log('unable to get users', err))
  }
  render() {
    return (
      <div className="App" >
        <GithubCard user={this.state.user} />
        <FollowersCard followers={this.state.user.followers_url} />
      </div>
    )
  }
}

export default App
