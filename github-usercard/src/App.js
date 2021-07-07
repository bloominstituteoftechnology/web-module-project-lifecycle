import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard'


class App extends React.Component {
  
  state = {
    user: 'AnthonyMillerGit',
    userInfo: [],
    followersArray: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/AnthonyMillerGit')
      .then(res => {
        console.log(res.data)
        this.setState({
          userInfo:res.data
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
  return (
    <div className="App">
      <h1>Github Card</h1>
      <div>
        <UserCard userInfo={this.state.userInfo}/>
      </div>
    </div>
  );
  }
}

export default App;
