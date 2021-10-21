import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    gitHubUser: {},
  };
  componentDidMount() {
    fetch("https://api.github.com/users/valera1900")
      .then((response) => response.json())
      .then((json) => this.setState({ gitHubUser: json }));
  }

  render() {
    console.log(this.state.gitHubUser);
    return <div className="App"></div>;
  }
}

export default App;
