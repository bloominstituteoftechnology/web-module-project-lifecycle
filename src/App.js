import React, { useEffect } from 'react';
import User from './components/User'
import FollowerList from './components/FollowerList'
import axios from 'axios'

class App extends React.Component {

  state = {
    currentuser: 'peterdavidconley',
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

  render() {

    
    return(
    <div>
      <section>
        <h1>GITHUB INFO</h1>
          <button>Github Handle</button>
        <form>
          <input 
          type='text'
          placeholder="Search Github User"
          />
          <button>Search</button>
        </form>
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
