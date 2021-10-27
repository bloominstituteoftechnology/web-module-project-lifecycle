import React from 'react';
import User from './components/User'
import axios from 'axios';
import Followers from './components/Follower';
import './App.css'

class App extends React.Component {
  state = {
    users:[],
    followers:[],
    input:'UlisesGatica'
  }

  componentDidMount(){
    axios.get(`https://api.github.com/users/${this.state.input}`)
    .then(resp=>{ 
      this.setState({
        ...this.state,
        users:resp.data
      })
    })
  }

  componentDidUpdate(){
    axios.get(`https://api.github.com/users/${this.state.input}/followers`)
    .then(resp=>{
      this.setState({
        ...this.state,
        followers:resp.data
      })
    })
  }

  onChange =(e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.input}`)
        .then(resp=> {
            this.setState({
                ...this.state,
                users: resp.data
            })
        })
        .catch(err=> {
            console.log(err);
        })
  }

    render() {
      return(<div>
        <h1>Github Info</h1>
        <form>
          <input value={this.state.input} onChange={this.onChange}/>
          <button onClick={this.handleSubmit}>Search</button>
        </form>
        <User user={this.state.users}></User>
        <Followers userFollower={this.state.followers}/>
      </div>);
    }
  }

  

export default App;
