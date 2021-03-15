import React, { Component } from "react";

export default class AddUserForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(e, this.state.username);
    this.setState({
      username: "",
    });
  };

  handleChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Enter in the username."
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <button>Search Other Fleets!</button>
      </form>
    );
  }
}
