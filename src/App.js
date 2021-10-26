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

  componentDidMount() {
    axios.get('https://api.github.com/users/MaryAngelique')
      .then(resp => {
        this.setState({
          ...this.state,
          userProfile: resp.data
        })
      })
      .catch(err => {
        console.error(err)
      })
  }
render() {
    return(

      <div>
        <h1>Github Info</h1>

        <div className="search-bar">
            <form onSubmit={this.handleSubmit}>
                <input
                  type = 'text'
                  value = {this.state.input}
                  onChange = {this.handleChange}
                  placeholder = 'Enter Github handle'
                />
                <button>Search</button>
            </form>

            <User user={this.state.userProfile}/>

            <FollowerList followers={this.state.followers}/>
        </div>
    
      </div>
    );
  }
}

export default App;