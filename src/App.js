import React from 'react'
import axios from 'axios'

import FollowerList from './components/FollowerList'

import './App.css'

class App extends React.Component {
  state = {
    user:[],
    input: ""
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/beatlesm')
        .then(res=> {
          // debugger
          this.setState({
            ...this.state,
            user: res.data
          });  
        })
        .catch(err=> {
            console.log(err);
        });
}

  render() {
    return(
      <div className="container">      
        <h1> GITHUB INFO</h1>
        <form className="form"> 
          <input />
          <button >Search</button>
          <div className="user">
              {console.log('this.state', this.state.user.avatar_url)}
              <img src={this.state.user.avatar_url} alt={this.state.user.login} />
              <div className= "user-info">
                  <h2>{this.state.user.name}</h2>
                  <h3>TOTAL REPOS: {this.state.user.public_repos} </h3>
                  <h3>TOTAL Followers: {this.state.user.followers} </h3>
              </div>  
              {/* <FollowerList />              */}
          </div>
        </form>           
      </div>);
  }
}

export default App;
