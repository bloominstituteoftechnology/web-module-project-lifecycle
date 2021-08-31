import React from 'react';
import UserForm from './components/UserForm';
import axios from 'axios';
import UserCard from './components/UserCard';


class App extends React.Component {
  state = {
    title: "GitHub Friends",
    user: "rickmansfield",
    followers: [],
    formValues: '',
  }
  fetchUser = (name) => {
    axios.get(`https://api.github.com/users/${name}`)
      .then(res => {
        console.log('App.js res.data', res.data)
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
      console.log('App.js followers data', res.data)
      this.setState({
        ...this.state,
        followers: res.data
      })
    })
  }

componentDidMount(){
  console.log('user state', this.state.user);
  this.fetchUser(this.state.user)
  this.fetchFollowers(this.state.user)
}

handeSubmit = e => {
  e.preventDefault();
  console.log('Fetch User Handler Fired', this.state.user);
}


  render() {
    return (
      <div className="App">
        <header>
          <h1>{this.state.title}</h1>
        </header>
        <div>
          <UserForm fetchUser={this.fetchUser} onSubmit={this.handeSubmit}/>
        </div>
        <div>
          <UserCard user={this.state.user} followers={this.state.followers}/>
        </div>

      </div>
    );
  }
}

export default App;

