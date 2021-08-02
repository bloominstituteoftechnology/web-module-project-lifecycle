import React from 'react';
import axios from "axios";
import './App.css';
import UserForm from './components/UserForm';
import styled from "styled-components";

const fetchUserData = (name) => {
  return axios.get(`https://api.github.com/users/${name}`)
  .then(res => res.data)
  .catch(err => console.log(err))
}

const fetchFollowersData = (name) => {
  return axios.get(`https://api.github.com/users/${name}/followers`)
  .then(res => res.data)
  .catch(err => console.log(err))
}


class App extends React.Component {
  state ={
    user: {
      name: '',
      bio: '',
      avatar: '',
      url: '',
    }, 
    follower: {
      user: '',
      avatar: '',
      url: ''
    }
  }

  componentDidMount(){
    fetchUserData('rickmansfield');
  }

  render() {
    return (
      <Wrapper>
      <div className="App" >
        <header className="App-header">
          <h1>HEADING</h1>
        </header>
      </div>
      <div>
        <UserForm />

      </div>
      </Wrapper>
    )

  }
}
export default App

const Wrapper = styled.div``;
