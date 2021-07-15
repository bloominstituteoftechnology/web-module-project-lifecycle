import React from 'react'
import axios from 'axios'
import './App.css';

class App extends React.Component{
  state ={
    users: [],
    userName:""
  }

  componentDidMount(){
    axios.get(`https://api.github.com/users/${this.state.userName}/followers`)
      .then((res) => {
        console.log(res)
        this.setState({
          users:res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleChange =e=> {
    this.setState({
      userName: e.target.value
    })
  }
  handleClick = e => {
    e.preventDefault()
    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(res => {
        console.log(res)
        this.setState({
          users: res.data
        })
      })
  }
  handleClickF = e => {
    e.preventDefault()
    axios.get(`https://api.github.com/users/${this.state.userName}/followers`)
      .then(res => {
        console.log(res)
        this.setState({
          users:res.data
        })
      })
  }
  render (){
    return (
      <div className="App">
        <h1>Search for user's info!</h1>
        <form>
          <input onChange ={this.handleChange} type="text" />
          <button onClick ={this.handleClick}>search</button>
        </form>
       <div className="card">
          <h2>{this.state.userName}</h2>
          <p>Followers: {this.state.users.followers}</p>
          <p>ID: {this.state.users.id}</p>
          <p>URL: {this.state.users.url}</p>
       </div>

       <h2>User's follower info</h2>
       <form>
          <input onChange ={this.handleChange} type="text" />
          <button onClick ={this.handleClickF}>search</button>
        </form>
        {this.state.users.map(follower => {
          <p>Follower's ID: {follower.id}</p>
        })}
      </div>
    );
  }

}

export default App;
