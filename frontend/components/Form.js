import React from "react";
import axios from "axios";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
    };
  }

  completedTask = (evt) => {
    evt.preventDefault();
    this.props.handleCompleted();
  };

  handleChange = (evt) => {
    evt.preventDefault();
    this.setState({ ...this.state, newTask: evt.target.value });
  };

  handlePost = (evt) => {
    evt.preventDefault();
    this.props.postToDo(this.state.newTask);

    this.setState({ ...this.state, newTask: "" });
  };
  render() {
    return (
      <form onSubmit={this.handlePost}>
        <div>
          <input
            type="text"
            placeholder="Add to list"
            onChange={this.handleChange}
            value={this.state.newTask}
          />
          <button onClick={this.handlePost}>Add</button>
        </div>
        <button onClick={this.completedTask}>Remove Completed</button>
      </form>
    );
  }
}
