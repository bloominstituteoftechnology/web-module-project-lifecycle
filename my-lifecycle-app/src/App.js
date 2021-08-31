import React from "react";
import axios from "axios";

import UserForm from "./components/UserForm";
import UserCard from "./components/UserCard";
import Followers from "./components/Followers";

class App extends React.Component {
  state = {
    user: "Klove-A",
    followers: [],
    input: "",
  }

  getUser = (name) => {
    axios.get(`https://api.github.com/users/${name}`)
      .then(res => {
        console.log("App getUser res.data", res.data)
        this.setState({
          ...this.state,
          user: res.data
        });
      })
      .catch(err => console.log("getUser error", err));
  }

  getFollowers = (name) => {
    axios.get(`https://api.github.com/users/${name}/followers`)
      .then(res => {
        console.log("App getFollowers res.data", res.data)
        this.setState({
          ...this.state,
          followers: res.data
        });
      })
      .catch(err => console.log("getFollowers error", err));
  }

  componentDidMount() {
    console.log("App componentDidMount user state", this.state.user);
    this.getUser(this.state.user)
    this.getFollowers(this.state.user)
  }

  handleSubmit = input => {
    console.log("App HandleSubmit this.state.user", this.state.user);
    this.getUser(input)
    this.getFollowers(input)
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>{this.state.title}</h1>
        </header>
        <div>
          <UserForm getUser={this.getUser} onSubmit={this.handleSubmit} />
        </div>
        <div>
          <UserCard user={this.state.user}  />
        </div>
        <div>
          <Followers followers={this.state.followers}/>
        </div>

      </div>
    );
  }

}

export default App;
