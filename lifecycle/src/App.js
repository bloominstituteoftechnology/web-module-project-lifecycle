import React, { Component } from 'react'
import './App.css';
import axios from 'axios'
import Followers from './Followers';
import logo1 from './assets/githublogo.png'
import logo2 from './assets/lambdalogo.png'


class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        user: '',
        followers: []
      }
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/rick-blaque')
    .then(res => {
      console.log(res)
      this.setState({
        ...this.state,
        user:res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
    axios.get('https://api.github.com/users/rick-blaque/followers')
    .then(res => {
      console.log(res.data)
      this.setState({
        ...this.state,
        followers:res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  render() {
    const followers = this.state.followers.map(follower => {
      return <Followers follower={follower}/>
    })
  return (
    <div className="App">
      <nav className="Nav">
      <img src={logo1} alt="Lambda Logo"/>
      <span>❤️ 's</span>
      <img src={logo2} alt="GitHub Logo" />
      </nav>
      <div className='User'>
      
      <img alt='user' src={this.state.user.avatar_url} style={{
        width: '200px',
        height: '200px',
        border: '1px solid black',
        boxShadow: '10px 5px 5px black',
        marginBottom: '10px'
      }}/>
      
        <div>
        <h1>{this.state.user.login}</h1>
        <ul>
          <li>Location: {this.state.user.location}</li>
          <li>Profile: <a href={this.state.user.html_url}>GitHub Profile</a></li>
          <li>Followers:{this.state.user.followers}</li>
          <li>Following: {this.state.user.following}</li>
          <li>Bio: {this.state.user.bio}</li>
        </ul> 
        </div>
       
      </div>
      <div className='Followers'>
        <h2>Followers: </h2>
        {followers}
      </div>
    </div>
  );
}
}
export default App;
