import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/kaseembradley")
      .then((res) => {
        this.setState({
          ...this.state,
          user: res.data,
        });
      })
      .catch((err) => console.log(err));

    axios
      .get("https://api.github.com/users/kaseembradley/followers")
      .then((res) => {
        this.setState({
          ...this.state,
          followers: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub User Card</h1>
        <img src={this.state.user.avatar_url} width="200" />
        <h2>Name</h2>
        <h2>{this.state.user.name}</h2>
        <p>Followers</p>
        {this.state.followers.map((item) => {
          return <p key={this.state.user.id}>{item.login}</p>;
        })}
      </div>
    );
  }
}

export default App;
