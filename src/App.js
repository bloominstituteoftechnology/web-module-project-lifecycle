import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    gitHubUser: {},
  };
  componentDidMount() {
    fetch("https://api.github.com/users/fabpot")
      .then((response) => response.json())
      .then((json) => this.setState({ gitHubUser: json }));
  }

  render() {
    console.log(this.state.gitHubUser);
    return (
      <>
        <div className="container">
          <div className="about">
            <img src={this.state.gitHubUser.avatar_url} alt="" />
            <p>{this.state.gitHubUser.name}</p>
            <p>{this.state.gitHubUser.login}</p>
            <div className="buttons">
              <button>Follow</button>
              <button>Sponsor</button>
            </div>
            <div className="media">
              <p>{this.state.gitHubUser.followers} followers • </p>
              <p>{this.state.gitHubUser.following} following</p>
            </div>
            <div className="info">
              <p>{this.state.gitHubUser.company}</p>
              <p>{this.state.gitHubUser.location}</p>
              <p>{this.state.gitHubUser.blog}</p>
              <p>{this.state.gitHubUser.twitter_username}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
