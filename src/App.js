import React from "react";
import "./App.css";
import FollowerList from "./components/FollowerList";
import User from "./components/User";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Github Card</h1>
        <form>
          <input placeholder="GitHub Username" />
          <button>Search</button>
        </form>
        <User />
        <h3>Followers</h3>
        <FollowerList />
      </div>
    );
  }
}

export default App;
