import React from 'react'
import axios from "axios"
import './App.css';
import User from './User'
import Followers from './Followers'


const fetchUser = (name) => {
  return axios.get(`https://api.github.com/users/${name}`)
  .then(res=>res)
  .catch(err=>console.log(err))
}
const fetchFollowers = (name) => {
  return axios.get(`https://api.github.com/users/${name}/followers`)
  .then(res=>res)
  .catch(err=>console.log(err))
}
class App extends React.Component {
  state = {
    user: 'JackOrth',
    followers: []
  }

  componentDidMount(){
    fetchUser(this.state.user)
     .then(res => {
        console.log(res)
      fetchFollowers(this.state.user)
      .then(response => {
        this.setState({
          followers: response.data,
          user:res.data
        })
      })
    })
  }
  handleChange = (e) => {
    this.setState({
      user: e.target.value
    })
  }

  render(){
  return (
    <div className="App">
      <div className="header">
        <h1>git hub user card</h1>
        <img src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png" alt='github' />
      </div>
      <div className='userCard'>
        <User user={this.state.user}/>
      </div>
      <h4>Followers</h4>
      <div className='followers'>
        <Followers followers={this.state.followers} />
      </div>
    </div>
  );
  }
}

export default App;
