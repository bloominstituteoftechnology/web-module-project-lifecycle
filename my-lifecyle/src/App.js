import "./App.css";
import React, { Component } from "react";
import Axios from "axios";

//imported components
import AddUserForm from "./components/AddUser";
import UserCard from "./components/UserCard";
import FollowersList from "./components/FollowersList";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "Alkibijad",
      gitUser: {},
      followers: [],
      inputValue: "",
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.fetchUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    if (prevState.username !== this.state.username) {
      console.log(this.state.userList);
      this.fetchUsers();
    }
  }

  fetchUsers = () => {
    Axios.get(`https://api.github.com/users/${this.state.username}`)
      .then((res) => {
        this.setState({
          gitUser: res.data,
        });
      })
      .catch((err) => {
        console.log("error: ", err);
      });

    Axios.get(
      `https://api.github.com/users/${this.state.username}/followers`
    ).then((res) => {
      this.setState({
        followers: res.data,
      });
    });
  };

  addUser = (event, user) => {
    const newUser = user;
    this.setState({
      username: newUser,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React Class Components GitHub UserCard</h1>

        <div>
          <AddUserForm addUser={this.addUser} />
        </div>

        <div>
          <UserCard {...this.state.gitUser} />
        </div>

        <div>
          <FollowersList followers={this.state.followers} />
        </div>
      </div>
    );
  }
}
