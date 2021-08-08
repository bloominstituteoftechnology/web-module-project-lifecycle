import React from 'react';
import axios from 'axios';
import UserCard from './Components/UserCard';
import FollowerCard from './Components/FollowerCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
    }
  }


  // login: "AidanJJenkins"
  // followers: 2
  // avatar_url: "https://avatars.githubusercontent.com/u/75285874?v=4"

  componentDidMount() {
    axios.get("https://api.github.com/users/AidanJJenkins")
      .then(res => this.setState({
        ...this.state,
        user: res.data
      }))
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="App">
        <h1>UserCard project</h1>
        <UserCard login={this.state.user.login} followers={this.state.user.followers} avatar={this.state.user.avatar_url}/>
        <FollowerCard />
      </div>
    );
  }
}

export default App;