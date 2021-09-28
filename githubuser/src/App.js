import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios'

// fetch user data


export default class App extends React.Component{
  state ={
      userData: [],
      login: '',
      userFollowers: []
  }

 
  handleInput = (e) => {
    this.setState({
      ...this.state,
      login: e.target.value
    })
  }

  handleSearch = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.login}`)
            .then(resp=>{
                this.setState({
                    ...this.state,
                    userData: resp.data
                })
            })
    axios.get(`https://api.github.com/users/${this.state.login}/followers`)
            .then(resp=>{
                this.setState({
                    ...this.state,
                    userFollowers: resp.data
                  
                })
                console.log(resp.data)
            })
            
  }




  render(){
    return(
      <div>
        <h1>GitHub User Data</h1>
        <form>
          <input value={this.state.login} onChange = {this.handleInput}/>
          <button onClick = {this.handleSearch}>Fetch User Data</button>
          <h2>Current User:</h2>
          <p>login: {this.state.userData.login}</p>
          <p>id: {this.state.userData.id}</p>
          <p>type: {this.state.userData.type}</p>
          <p>url: {this.state.userData.url}</p>
          <br></br>
          <h2>Followers:</h2>


          <div className ="follower-images">
                    {this.state.userFollowers.map((item)=>{
                        return(
                          <img key={item.id} src={item.avatar_url}/>
                          )
                    })}
                </div>
        </form>
      </div>
    )
  }
}