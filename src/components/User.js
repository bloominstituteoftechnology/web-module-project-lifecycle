import React from "react";

class User extends React.Component {
  render() {
    return (
      <div className="user-profile">
        <img src="https://avatars.githubusercontent.com/u/89364961?v=4" />
        <h2>Tina Gao</h2>
        <h5>username: tinaxgao</h5>
        <h4>Repos: 37</h4>
        <h4>Followers: 18</h4>
      </div>
    );
  }
}

export default User;
