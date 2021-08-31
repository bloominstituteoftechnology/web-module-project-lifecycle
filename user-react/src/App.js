import React from 'react'
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state ={
    search: {},
    name: '',
    img: '',
    follower: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/LeonelHays`)
    .then(res=> {
      this.setState({
        search: res.data,
      });
    })
    .catch(er => {
      console.error(er);
    })
  }
  fetchFollowers = () => {
    axios.get(`https://api.github.com/users/LeonelHays/followers`)
    .then(res => {
      this.setState({
        follower: res.data
      })
    })
  }
 
  render(){
    return (<div>
        <h1>GitHub User Card v2.0</h1>
        <div id="user-card">
           <img width={80} src={this.state.search.avatar_url}
           />
          <p>Name: {this.state.search.login}</p>
          <p>Repos: {this.state.search.public_repos}</p>
          <p>Location: {this.state.search.location}</p>
          <button onClick={this.fetchFollowers}>See followers</button>
          {this.state.follower.map(item => {
            return (
              <div>
           <img width={80} src={item.avatar_url}
           />
          <p>Name: {item.login}</p>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
