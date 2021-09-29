import "./App.css";
import React from "react";
import axios from "axios";
import User from "./User";

class App extends React.Component {
  state = {
    userData: {
      avatar_url: "",
      name: "",
      html_url: "",
      followers: "",
      following: "",
    },
    user: "",
  };

  componentDidMount() {
    axios.get(`https://api.github.com/users/rosegabriely`).then((res) => {
      this.setState({
        userData: res.data,
      });
    });
  }

  onChange = (event) => {
    this.setState({
      ...this.state,
      user: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.user}`).then((res) => {
      this.setState({
        userData: res.data,
      });
    });
  };

  render() {
    return (
      <div className="App-header">
        <h1>Get a Github User's Info</h1>
        <form onSubmit={this.onSubmit}>
          <label>
            Enter a github user:{" "}
            <input
              type="text"
              placeholder="Username"
              value={this.state.user}
              onChange={this.onChange}
            />{" "}
          </label>
          <button>Submit</button>
        </form>
        <User userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
