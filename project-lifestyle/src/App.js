import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';
import "./components/followers";
import "./components/GithubUser"
import GitHubUser from './components/GithubUser';


class App extends React.Component {
  // SETTING INITIAL STATE
  state = {
    myUser: [{}],
    followers: [],
  };

  componentDidMount(){
    axios.get("https://api.github.com/users/rishimaru23")
    .then (resp =>{
      console.log('component did mount', resp.data)
      this.setState({
        myUser:resp.data
      });
    })
    .catch (err => {
      console.log (err)
    });
  
  axios.get ("https://api.github.com/users/rishimaru23/followers")
  .then((resp) => {
    this.setState({
      followers: resp.data
      });
    });
  }

  render(){
    return (<>
      <h1> Hey there</h1>
      <GitHubUser myUser = {this.state.myUser}/>
      </>

    )
  }

}

export default App;
