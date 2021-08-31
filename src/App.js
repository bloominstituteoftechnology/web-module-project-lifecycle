import React from 'react';
import UserForm from './components/UserForm';
import axios from 'axios';
import UserCard from './components/UserCard';
import Followers from './components/Followers';


class App extends React.Component {
  state = {
    title: "GitHub Friends",
    user: "rickmansfield",
    followers: [],
    input: '',
  }
  fetchUser = (name) => {
    axios.get(`https://api.github.com/users/${name}`)
      .then(res => {
        console.log('App.js fetchUser res.data', res.data)
        this.setState({
          ...this.state,
          user: res.data
        });
      })
      .catch(err => console.log('error', err));
  }

  fetchFollowers = (name) => {
    axios.get(`https://api.github.com/users/${name}/followers`)
      .then(res => {
        console.log('App.js fetchFollowers res.data', res.data)
        this.setState({
          ...this.state,
          followers: res.data
        })
      })
  }

  componentDidMount() {
    console.log('App.js componentDidMount user state:', this.state.user);
    this.fetchUser(this.state.user)
    this.fetchFollowers(this.state.user)
  }

  // handleChanges = e => {
  //   console.log('App.js User Input handleChanges Fired', e.target.value);
  //   this.setState({
  //     input: e.target.value,
  //     // user: e.target.value
  //   });
  // }

  handleSubmit = input => {
    // e.preventDefault();
    console.log('App.js Fetch User HandleSubmit this.state.user', this.state.user);
    this.fetchUser(input)
    this.fetchFollowers(input)
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>{this.state.title}</h1>
        </header>
        <div>
          <UserForm fetchUser={this.fetchUser} onSubmit={this.handleSubmit} onChange={this.handleChanges} />
        </div>
        <div>
          <UserCard user={this.state.user}  />
        </div>
        <div>
          <Followers followers={this.state.followers}/>
        </div>

      </div>
    );
  }
}

export default App;

