import React from 'react';
import axios from 'axios';



class App extends React.Component {
  state= {
    usersGit: [],
    users: "",
    gitFollowers: []
  }

  componentDidMount(){
    axios.get(`https://api.github.com/users/BradfordMez`)
      .then(res=>{
        this.setState({
          ...this.state,
          usersGit:res.data
        });
      })
      .catch(err=>{
        console.log(err)
      })
    axios.get(`https://api.github.com/users/BradfordMez/followers`)
      .then(res=>{
        this.setState({
          ...this.state,
          gitFollowers:res.data
        });
      })
  }
  handleChange=(e)=>{
    this.setState({
      ...this.state,
      users:e.target.value
    })
  }

  handleClick=(e)=>{
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.users}`)
      .then(res=>{
        this.setState({
          ...this.state,
          usersGit: res.data
        })
      })
      .catch(err=>{
        console.log(err)
      })
  }

  render(){
    return(<div>
      <h1>Github User Cards</h1>
      <form>
        <input onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Fetch User</button>
      </form>
      <div id='Card' >
                <img src={this.state.usersGit.avatar_url}/>
                <div id='info'>
                    <h3>{this.state.usersGit.name}</h3>
                    <p>{this.state.usersGit.login}</p>
                    <p>location: {this.state.usersGit.location}</p>
                    <p>Profile: <a href={this.state.usersGit.html_url}> {this.state.usersGit.html_url} </a> </p>
                    <p>Followers: {this.state.usersGit.followers} </p>
                    <p>Following: {this.state.usersGit.following} </p>
                    <p>Bio: {this.state.usersGit.bio} </p>
                  </div>

                  <div>
                    {this.state.gitFollowers.map(follower=>{

                      return(
                        <div>
                          <img src={follower.avatar_url}/>
                        <h3>{follower.name}</h3>
                        <p>{follower.login}</p>
                        <p>Profile: <a href={follower.html_url}> {follower.html_url} </a> </p>
                        </div>
                        )
                    })}
                    </div>
                
            </div>
    </div>)
  }
}

export default App