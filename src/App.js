import React from 'react';
import axios from 'axios';


class App extends React.Component {

  state= {
    avatar_url: '',
    name: '',
    login: '',
    public_repos: '',
    followers: '',

  }

  componentDidMount () {
    axios.get("https://api.github.com/users/justinpeisker")
      .then(res => {
        console.log(res);
        this.setState({
          ...this.state,
          avatar_url: res.data.avatar_url,
          name: res.data.name,
          login: res.data.login,
          public_repos: res.data.public_repos,
          followers: res.data.followers
        })
      })
      .catch(err => {
        console.error(err);
      })
  }
  render() {
    return(
      <div>
        <h1> GitHub Info </h1>
        <form>
          <input />
          <button>Search</button>    
        </form>
        <div className= 'main-profile'>
          <img src= {this.state.avatar_url} alt='' />
          <h2> {this.state.name} </h2>
          <p> {this.state.login} </p>
          <h4> Total Repos: {this.state.public_repos} </h4>
          <h4> Total Followers: {this.state.followers} </h4>
        </div>
        <div className= 'followers'>
          <img src= '' alt= '' />
          <h3> Name: </h3>

        </div>

      </div>);
  }
}

export default App;
