/**
 * Tom Bielawski
 * Lambda School WEB45 3.1.2 
 * REACT GIT CARD PROJECT
 * 8/3/2021
 **/

//Import statements
import React from "react";
import GitUser from "./GitUser"
import GitFollowers from './GitFollowers';
import './App.css';

//Class app definition
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

//Export statement
export default App;
