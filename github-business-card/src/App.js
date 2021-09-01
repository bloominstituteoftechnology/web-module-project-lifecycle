import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import Info from './components/Info'
import Followers from './components/Followers'

class App extends Component{
  
  state={
    avatar_url:'',
    html_url:'',
    name:'',
    location:'',
    bio:'',
    twitter_username:''
  }
  
  componentDidMount(){
    axios.get('https://api.github.com/users/retrofitt')
      .then(res=>{
        this.setState({
          avatar_url: res.data.avatar_url,
          html_url: res.data.html_url,
          name: res.data.name,
          location: res.data.location,
          bio: res.data.bio,
          twitter_username: res.data.twitter_username
        })
        console.log(this.state)
      })
      .catch(err=>{
        console.log(err)
      })  
  }
  

  render(){

    return (<div className='App'>
      <div className='card-container'>
        <Info 
          avatar={this.state.avatar_url} 
          name={this.state.name}
          twitter={this.state.twitter_username}
          location={this.state.location}
          url={this.state.html_url}
        />
        <div className='container'>
          <p>" {this.state.bio} "</p>
        </div>
        <Followers />
      </div>
      
    </div>);
  }
}

export default App;
