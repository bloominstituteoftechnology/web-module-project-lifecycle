import React, { Component } from "react";
import axios from "axios";

class User extends Component {
  state = {
    user: []
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/ModupeD")
      .then(res => {
        this.setState({
          user: res.data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { user } = this.state;
    if (!this.state.user) return <p>Loading data...</p>;
    return (
      <div>
        <img
          style={{ width: "150px", borderRadius: "50%" }}
          src={this.state.user.avatar_url}
          alt={this.state.user.name}
        />
        <h3>{this.state.user.name}</h3>
        <p>username: {user.login}</p>
      </div>
    );
  }
}

export default User;
