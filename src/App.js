import React from 'react';
import axios from 'axios';

import User from './components/User';
import FollowerList from './components/FollowerList';

const userName = 'Kseniyapl'

class App extends React.Component {
  state = {
    user:[],
    input: ""
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${userName}`)
    .then(resp=>{
     // console.log(resp.data)
      this.setState({
        ...this.state,
        user:resp.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleChange = (e) =>{
    this.setState({
      ...this.state,
      input: e.target.value
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.input}`)
    .then(resp =>{
      this.setState({
        ...this.state,
        user:resp.data
      })
      .catch(err=>{
        console.log(err)
      })
    })

  }
  
  render() {
    return(<div>
      <h1>Github Card</h1>
      <form>
        <input value ={this.state.input} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Search User</button>
      </form>
      <User user={this.state.user}/>
      <FollowerList gitFollowers={this.state.user.login}/>
    </div>);
  }
}

export default App;
