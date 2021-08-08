import React from 'react'
import axios from 'axios'
import './App.css'

class App extends React.Component {
  state = {
    user: [],
    followers: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/TaylorCoder22")
      .then((res) => {
        console.log(res.data);
        this.setState({
          user: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("https://api.github.com/users/TaylorCoder22/followers")
      .then((res) => {
        console.log(res.data);
        this.setState({
          followers: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (evt) => {
    this.setState({
      user: evt.target.value,
    });
  };

  fetchFollowers = () => {
    axios
      .get("https://api.github.com/users/TaylorCoder22/followers")
      .then((res) => {
        console.log(res);
        this.setState({
          followers: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
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
        <h1>User Card 2: The Remix</h1>
        <div className="userContainer">
          <h1>Name: {this.state.user.name}</h1>
          <div className="imgContainer">
            <img src={this.state.user.avatar_url} />
          </div>
          <h4>Username: {this.state.user.login}</h4>
          <h4>Bio: {this.state.user.bio}</h4>
          <h4>Location: {this.state.user.location}</h4>
        </div>
        <div className="followerContainer">
          <h1>My Family</h1>
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
