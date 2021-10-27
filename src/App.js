import React from 'react';
import User from './components/User'
import axios from 'axios';
import Followers from './components/Follower';

class App extends React.Component {
  state = {
    users:[],
    followers:[],
    input:''
  }

  componentDidMount(){
    axios.get(`https://api.github.com/users/UlisesGatica`)
    .then(resp=>{ 
      this.setState({
        ...this.state,
        users:resp.data
      })
    })
  }

  componentDidUpdate(){
    axios.get(`https://api.github.com/users/UlisesGatica/followers`)
    .then(resp=>{
      this.setState({
        ...this.state,
        followers:resp.data
      })
    })
  }

  render() {
    return(<div>
      <h1>Github Info</h1>
      <User user={this.state.users}></User>
      <Followers userFollower={this.state.followers}/>
    </div>);
  }
}

export default App;
