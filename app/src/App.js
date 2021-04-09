import React from "react";
import "./App.css";
import axios from "axios";
import UserCard from "./components/UserCard"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/SJMucho")
      .then((res) => {
        this.setState({ ...this.state, user: res.data.message });
      })
      .catch((err) => err);
  }

  fetchUser = () => {

  }

  componentDidUpdate() {

  }

  render() {
    return (
      <div>
        <p>Hello</p>
        <input type="text" /><button onClick={this.fetchUser}>Click Me</button>
        {this.state.user.map(user => {
          return <img src={user} key={user} />;
        })}
        <UserCard />
      </div>
    );
  }
}

export default App;
