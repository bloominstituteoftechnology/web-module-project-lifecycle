import React, { useEffect } from 'react';
import User from './components/User'
import FollowerList from './components/FollowerList'
import axios from 'axios'
import './App.css'

class App extends React.Component {

  state = {
    currentuser: '',
    profile: [],
    followers: [],
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/peterdavidconley`)
    .then(resp => {
      this.setState({
        ...this.state,
        profile: resp.data
      })
    })
    .catch(err => {
      console.log(err)
    })

    axios.get('https://api.github.com/users/peterdavidconley/followers')
            .then(resp=> {
                this.setState({
                    ...this.state,
                    followers: resp.data
                });
            })
            .catch(err=> {
                console.log(err);
            });
}

/* componentDidUpdate(){
  console.log('Component did update.')
}*/

handleChange = (e) => {
  this.setState({
      ...this.state,
      currentuser: e.target.value
  });
}

handleSubmit = (e) => {
  e.preventDefault();
  axios.get(`https://api.github.com/users/${this.state.currentuser}`)
            .then(resp=> {
              this.setState({
                ...this.state,
                profile: resp.data,
              })
            })
            .catch(err=> {
                console.log(err);
            })

  axios.get(`https://api.github.com/users/${this.state.currentuser}/followers`)   
  .then( resp => {
    this.setState({
      ...this.state,
      followers: resp.data
    })
  })     
  .catch(err => {
    console.log(err)
  })  
}

  render() {
    return(
    <div>
      <section className='githubinfo'>
        <h1>GITHUB INFO</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input 
            type='text'
            placeholder="Search Github User"
            onChange={this.handleChange}
            value={this.state.currentuser}
            />
            <button>Search</button>
          </form>
        </div>
      </section>
      <br/>
      <User profile={this.state.profile}/>
      <h2>FOLLOWERS:</h2>
      <br />
      <FollowerList followers={this.state.followers}/>
    </div>);
  }
}

export default App;
