import React from 'react';
import axios from 'axios'

class App extends React.Component {

  state = {
    followers: [],
    profile: []
  }

  componentDidMount() {
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
        <button>Search</button>
      </section>
      <br/>
      <section>
        <img height='250px' width='250px' src='https://avatars.githubusercontent.com/u/85258866?v=4'/>
        <div>
          <h3>PETER CONLEY</h3>
          <p>(peterdavidconley)</p>
          <h4>TOTAL REPOS: </h4>
          <h4>TOTAL FOLLOWERS:</h4>
        </div>
      </section>
      <section>
        <h2>FOLLOWERS:</h2>
        <br />
        { this.state.followers.map( (follower) => {return (
        <div>
        <img height='150px' width='150px' src={follower.avatar_url}/>
        <h5>{follower.login}</h5>
        </div>)}
        )}
      </section>
    </div>);
  }
}

export default App;
