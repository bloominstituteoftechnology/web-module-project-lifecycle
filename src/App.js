import React, { useEffect } from 'react';
import User from './components/User'
import FollowerList from './components/FollowerList'

class App extends React.Component {

  

  render() {

    
    return(
    <div>
      <section>
        <h1>GITHUB INFO</h1>
        <button>Github Handle</button>
        <button>Search</button>
      </section>
      <br/>
      <User />
      <h2>FOLLOWERS:</h2>
      <br />
      <FollowerList />
    </div>);
  }
}

export default App;
