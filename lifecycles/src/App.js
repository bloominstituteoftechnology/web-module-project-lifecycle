import React from 'react'
import axios from 'axios'
import UserCard from './components/UserCard'
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      githubData: {
      name: '',
      login: '',
      avatar_url: '',
      location: '',
      bio: '',
      html_url: '',
      followers: '',
      following: '',
      }
    }
    console.log('Github data rendered')
  }

  componentDidMount() {
    console.log('Component Mounted')
    axios.get('https://api.github.com/users/marciemaclean')
        .then(res => this.setState({
            ...this.state,
            githubData: res.data
        }))
        .catch(err => console.log(err));
}

  render() {
    return (
      <div className="App">
        <h1>{this.state.githubData.name}'s Github Profile:</h1>
        <UserCard userData={this.state.githubData}/>
      </div>
    );
  }
}

export default App;