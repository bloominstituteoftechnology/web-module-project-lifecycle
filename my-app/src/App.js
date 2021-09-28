import React from 'react';
import axios from 'axios';



class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Welcome to my Github</h1>
        <div className="my-github">
          <img src="https://avatars.githubusercontent.com/u/87757115?v=4" />
          <p>Username: minasoha</p>
          <p>Follower Count: 10</p>
          
        </div>
      </div>
    )
  }



}

export default App;