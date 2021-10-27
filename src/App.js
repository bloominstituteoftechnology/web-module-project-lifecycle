import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList'
import axios from 'axios';


class App extends React.Component {
  state = {
    userProfile: {},
    followers: [],
    input: ''
  }

  handleChange = evt => {
    this.setState({
      ...this.state,
      input: evt.target.value
    })
  }

  handleSubmit = evt => {
    evt.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.input}`)
      .then(resp => {
        this.setState({
          ...this.state,
          userProfile: resp.data
        })
      })
  }

export default App;
