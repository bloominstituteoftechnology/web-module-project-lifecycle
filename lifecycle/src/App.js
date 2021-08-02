import React from 'react';
import axios from "axios";
import UserForm from './components/UserForm';
import User from './components/User';
import './App.css';
import styled from "styled-components";

const fetchUserData = (name) => {
  return axios.get(`https://api.github.com/users/${name}`)
  .then(res =>  res)
  .catch(err => console.log(err))
}
const fetchFollowersData = (name) => {
  return axios.get(`https://api.github.com/users/${name}/followers`)
  .then(res => res.data)
  .catch(err => console.log(err))
}
class App extends React.Component {
  state ={
    user: 'rickmansfield',
    formValues: '',
    followers: []
  }
  componentDidMount(){
    fetchUserData(this.state.user)
    .then(res => {
      console.log(res);
      this.setState({
        user: res.data

      })
    })
  }
  handleChange = event => {
    console.log('App event target:\n', event.target.value)
    this.setState({
      formValues: event.target.value,
      user: event.target.value
    })
  }
  handleSubmit = (e) => {
    
    e.preventDefault()
    
    fetchUserData(this.state.user)
        .then(res => {
            this.setState({
                user: res.data
            })
        })
        .catch(err => console.log(err))
}
  render() {
    return (
      <Wrapper>
      <div className="App" >
        <header className="App-header">
          <h1>GitHub User Card II</h1>
        </header>
      </div>
      <div>
        <UserForm onChange={this.handleChange} onSubmit={this.handleSubmit}/>
      </div>
      <div className="users-container">
        <User user={this.state.user}/>
      </div>
      </Wrapper>
    )

  }
}
export default App

const Wrapper = styled.div``;
