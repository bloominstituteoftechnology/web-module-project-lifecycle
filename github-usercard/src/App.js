import React from "react";
import axios from "axios";
import User from "./User";
import Following from "./Following";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/OwenDamron`)
    .then(res => this.setState({
      ...this.state,
      user: res.data
    }))
    .catch(err => console.log(err));
  }
  render() {
    return (
      <div className='App'>
        <h1>React GitHub Cards </h1>;
        <User login={this.state.user.login} following={this.state.user.following} profilePic={this.state.user.avatar_url}/>
        <Following />
      </div>
    
    )
  }
  
}

export default App;
