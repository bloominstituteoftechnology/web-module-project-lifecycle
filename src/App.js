import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Github Card</h1>
        <form>
          <input placeholder="GitHub Username" />
          <button>Search</button>
        </form>
        <div className="user-profile">
          <img src="https://avatars.githubusercontent.com/u/89364961?v=4" />
          <h2>Tina Gao</h2>
          <h5>username: tinaxgao</h5>
          <h4>Repos: 37</h4>
          <h4>Followers: 18</h4>
        </div>
        <h3>Followers</h3>
        <div className="followers-list">
          <div className="follower-card">
            <img src="https://avatars.githubusercontent.com/u/89364961?v=4" />
            <h4>First Last</h4>
          </div>
          <div className="follower-card">
            <img src="https://avatars.githubusercontent.com/u/89364961?v=4" />
            <h4>First Last</h4>
          </div>
          <div className="follower-card">
            <img src="https://avatars.githubusercontent.com/u/89364961?v=4" />
            <h4>First Last</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
