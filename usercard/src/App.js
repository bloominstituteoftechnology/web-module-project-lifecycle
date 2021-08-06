import React from 'react'
import axios from 'axios'
import './App.css';
import UserCard from './components/UserCard'
import SearchUser from './components/SearchUser'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    }
  }

  componentDidMount() {
    // console.log('App Mounted!')
    axios.get('https://api.github.com/users/jordonez419')
      .then(res => this.setState({
        ...this.state,
        user: res.data
      }))
      .catch(err => console.log(err))
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("Component updated");
    if (prevState.user !== this.state.user) {
      // console.log("User Changed!! ");
    }
  }

  getUser = (searchTerm) => {
    // console.log('Searching for user!', searchTerm)
    axios.get(`https://api.github.com/users/${searchTerm}`)
      .then(res => this.setState({
        ...this.state,
        user: res.data
      }))
      .catch(err => alert(err))
  }



  render() {
    return (
      <div className="App">
        <SearchUser getUser={this.getUser} />
        <UserCard userData={this.state.user} getUser={this.getUser} />
      </div>
    );
  }
}

export default App;