import React from 'react';
import axios from 'axios';
import styled from 'styled-components'


const WebDiv = styled.div`
  text-align: center;
  background-color: ${props=>props.theme.headerColor};
  color: ${props=>props.theme.primaryColor};
  padding-top:1em;
  padding-bottom:1em;
  margin:.3em;
  border: .8em ridge ${props=>props.theme.backgroundColor};
`
const CardHolder = styled.div`
  text-align: center;
  background-color: ${props=>props.theme.secondaryColor};
  color: ${props=>props.theme.white};
  padding-top:1em;
  padding-bottom:1em;
  margin-left:20rem;
  margin-top:2rem;
  margin-right:20rem;
  border: .8em ridge ${props=>props.theme.primaryColor};

`



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
      axios.get(`https://api.github.com/users/${this.state.users}/followers`)
      .then(res=>{
        this.setState({
          ...this.state,
          gitFollowers:res.data
        });
      })
  }

  render(){
    return(<WebDiv>
      <h1>Github User Cards</h1>
      <form>
        <input onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Fetch User</button>
      </form>
        <CardHolder>
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
                  </CardHolder>
                  

                  <CardHolder>
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
                    </CardHolder>
                
            
    </WebDiv>)
  }
}

export default App