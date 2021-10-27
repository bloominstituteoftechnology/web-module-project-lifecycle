import React from "react";
import "./App.css";
import axios from "axios";
import FollowerList from "./components/FollowerList";
import User from "./components/User";

class App extends React.Component {
  state = {
    input: "",
    login: "",
    id: "",
    name: "",
    avatar_url: "",
    public_repos: "",
    followers: "",
    followers_list: [],
  };

  //INITIAL CONDITION-LOAD MY INFO
  componentDidMount() {
    axios
      .get("https://api.github.com/users/tinaxgao")
      .then((resp) => {
        this.setState({
          ...this.state,
          login: resp.data.login,
          id: resp.data.id,
          name: resp.data.name,
          avatar_url: resp.data.avatar_url,
          public_repos: resp.data.public_repos,
          followers: resp.data.followers,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://api.github.com/users/tinaxgao/followers")
      .then((resp) => {
        this.setState({
          ...this.state,
          followers_list: resp.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //SEARCH FOR USER
  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .all([
        axios.get(`https://api.github.com/users/${this.state.input}`),
        axios.get(`https://api.github.com/users/${this.state.input}/followers`),
      ])
      .then(
        axios.spread((...resp) => {
          const respUser = resp[0];
          const respFollowers = resp[1];

          this.setState({
            ...this.state,
            login: respUser.data.login,
            id: respUser.data.id,
            name: respUser.data.name,
            avatar_url: respUser.data.avatar_url,
            public_repos: respUser.data.public_repos,
            followers: respUser.data.followers,
          });

          this.setState({
            ...this.state,
            followers_list: respFollowers.data,
          });
        })
      )
      .catch((err) => {
        console.log(err);
      });
  };

  handleClickSubmit = (e) => {
    axios
      .all([
        axios.get(`https://api.github.com/users/${e}`),
        axios.get(`https://api.github.com/users/${e}/followers`),
      ])
      .then(
        axios.spread((...resp) => {
          const respUser = resp[0];
          const respFollowers = resp[1];

          this.setState({
            ...this.state,
            login: respUser.data.login,
            id: respUser.data.id,
            name: respUser.data.name,
            avatar_url: respUser.data.avatar_url,
            public_repos: respUser.data.public_repos,
            followers: respUser.data.followers,
          });

          this.setState({
            ...this.state,
            followers_list: respFollowers.data,
          });
        })
      )
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1>Github Card</h1>
        <form>
          <input
            placeholder="GitHub Username"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Search</button>
        </form>
        <User
          name={this.state.name}
          login={this.state.login}
          pic={this.state.avatar_url}
          repos={this.state.public_repos}
          followers={this.state.followers}
        />
        <h3>Followers</h3>
        <FollowerList followersList={this.state.followers_list} clickSubmit={this.handleClickSubmit} />
      </div>
    );
  }
}

export default App;
