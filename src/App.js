import React from 'react';
import User from './components/User';
// import FollowerList from './components/FollowerList';
// import Follower from './components/Follower';
import axios from 'axios';
import "./App.css";


class App extends React.Component {

  state = {
    userProfile:{},
    followers: [],
    input: ''
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/hughespham2002')
    .then(resp => {
      this.setState({
        ...this.state,
        userProfile: resp.data
      });
    })
    .catch(error =>{
        console.log(error);
    })
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      input: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.input}`)
    .then(resp => {
      this.setState({
        ...this.state,
        userProfile: resp.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return(<div>
      <h1>Github Card</h1>
      <div className = 'search-bar'>
        <form onSubmit={this.handleSubmit}>
          <input 
            type = 'text'
            value = {this.state.input}
            onChange = {this.handleChange}
            placeholder = 'Github handle'
          />
          <button>Search Github User</button>
        </form>
        
        
        <User user={this.state.userProfile}/>
        {/* <FollowerList followers={this.state.followers}/> */}
      </div>
    </div>);
  }
}

export default App;
