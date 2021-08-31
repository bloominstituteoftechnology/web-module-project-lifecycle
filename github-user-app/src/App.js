import React from 'react'
import axios from 'axios'
import './App.css'
import Form from './components/Form';
import Profile from './components/Profile';

class App extends React.Component {
  state = {
    input: '',
    avatar_url: '',
    bio: '',
    login: '',
    followers_url: '',
    following_url: '',
    name: '',
    isSubmitted: false
  };

  componentDidMount() {
    console.log('App: CDM');
    // exact same as empty watcher array useEffect
    // using conditional rendering in Profile component so I don't have to have user to start
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      input: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.input}`)
      .then(resp => {
        console.log('handleSubmit response', resp);
        this.setState({
          ...this.state,
          avatar_url: resp.data.avatar_url,
          bio: resp.data.bio,
          login: resp.data.login,
          followers_url: resp.data.followers_url,
          following_url: resp.data.following_url,
          name: resp.data.name,
          isSubmitted: true
        })
      })
      .catch(err => {console.log(err);})
  };

  render () {
    // console.log('App: Rendered');
    return (

      <div className='app-container'>

        <h1>Github User App</h1>
          <Form
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            input={this.state.input}
          />
          {/* <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              onChange={this.handleChange}
              value={this.state.input}
              placeholder='Search for a new user'
            />
            <button>Find</button>
          </form> */}

          {/* <Profile
          
          /> */}

        <div className='github-card'>
            <img src={this.state.avatar_url} width={150} alt={`${this.state.login}'s Github avatar`}/>
            <h4>{this.state.login}</h4>
            <h5>Here's a little more about {this.state.name}'s Github Profile</h5>
            <p>{this.state.bio}</p>
        </div>

      </div>
    );
  };
};

export default App;