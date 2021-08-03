import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    user: [],
    followers: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/ray-rafe")
      .then((resp) => {
        console.log(resp.data);
        this.setState({
          user: resp.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://api.github.com/users/ray-rafe/followers")
      .then((resp) => {
        console.log(resp.data);
        this.setState({
          followers: resp.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange = (e) => {
    this.setState({
      user: e.target.value,
    });
  };

  fetchFollowers = () => {
    axios
      .get("https://api.github.com/users/ray-rafe/followers")
      .then((resp) => {
        console.log(resp);
        this.setState({
          followers: resp.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      console.log("previous props");
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Github User Card v.2</h1>
        <div className="userContainer">
          <h1>Name: {this.state.user.name}</h1>
          <div className="imageContainer">
            <img src={this.state.user.avatar_url} />
          </div>
          <h4>Username: {this.state.user.login}</h4>
          <h4>Bio: {this.state.user.bio}</h4>
          <h4>Location: {this.state.user.location}</h4>
        </div>
        <div className="followerContainer">
          <h1>Who I Follow</h1>
          {this.state.followers.map((follower) => {
            return <h2>{follower.login}</h2>;
            <br></br>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
