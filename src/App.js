import React from 'react';
import UserForm from './components/UserForm';
import axios from 'axios';

const fetchUser = (name) => {
  axios.get(`https://api.github.com/users/${name}`)
    .then(res => {
      console.log('App.js res.data', res.data)
      this.setState({
        ...this.state,
        user: res.data.user
      });
    })
    .catch(err => console.log('error', err));
}
class App extends React.Component {
  state = {
    title: "GitHub Friends",
    user: "rickmansfield",
    formValues: '',
    followers: []
  }


componentDidMount(){
  console.log('user state', this.state.user);
  fetchUser(this.state.user)
}




  render() {
    return (
      <div className="App">
        <header>
          <h1>{this.state.title}</h1>
        </header>
        <div>
          <UserForm fetchUser={this.fetchUser} />
        </div>

      </div>
    );
  }
}

export default App;

