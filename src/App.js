import React from 'react';
import axios from 'axios';


class App extends React.Component {
  render() {
    return(
      <div>
        <h1> GitHub Info </h1>
        <input />
        <button>Search</button>    
        <div className= 'main-profile'>
          <img src= 'https://avatars.githubusercontent.com/u/87906218?v=4' alt='' />
          <h2> Name: </h2>
          <h4> Total Repos: </h4>
          <h4> Total Followers: </h4>
        </div>
        <div className= 'followers'>
          <img src= '' alt= '' />
          <h3> Name: </h3>

        </div>

      </div>);
  }
}

export default App;
