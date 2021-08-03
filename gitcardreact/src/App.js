//

import React from "react";
import GitUser from "./GitUser"
import GitFollowers from './GitFollowers';
import './App.css';

//
class App extends React.Component 
{

  //Set state 
  state =
  {
    users: [],
    followers:  []
  }



  //Render/return
  render()
  {
    return(
      <div className = "bigDiv">
        <div className = "gitClass">
          <h1> REACT GIT USER CARD PROJECT</h1>
          <GitUser/>
          <GitFollowers/>
        </div>
      </div>
    )
  }
  
    
}

//Export 
export default App;
