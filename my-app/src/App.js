import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [], 
      followers: []
    }
  }

  componentDidMount () {
    console.log('component did mount');
    axios
      // calling self API
      .get("https://api.github.com/users/alieze-ali")
      .then((res) => {
        console.log(res)
        this.setState({
          user: res.data   
        })
      })
      .catch((err) => {
        console.log(err)
      })
      .then(
        // calling followers API 
        axios
        .get("https://api.github.com/users/alieze-ali/followers")
        .then((res) => {
          console.log(res)
          this.setState({
            followers: res.data
          })
        })
        .catch((err) => {
          console.log(err)
        })
      );    
}

componentDidUpdate (previousState) {
  // checking if previous state of user/follower is === current state
  if(previousState.user !== this.state.user){
    console.log("User has changed");
    }
  if(previousState.followers !== this.state.followers){
    console.log("Followers have changed");
    }
}


  render (){
    return (
      <div>
        <h1>Test App</h1>
        
        <div>
          <h1>{this.state.user.login}</h1>
          <img src={this.state.user.avatar_url} width='250' className="" />
        
            {this.state.followers.map( (followers) => {
              return (
                  <div>
                    <h1>{followers.login}</h1>
                    <img src={followers.avatar_url} width='250' className="" />
                  </div>  
              )
            })}
         </div>   
      </div>
    );
  }
  
}

export default App;
