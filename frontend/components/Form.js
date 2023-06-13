/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import axios from "axios"
export default class Form extends React.Component {
  state = {
    newTask: "",
  };
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
    this.props.ToDo(this.state.newTask);
    this.setState({ ...this.state, newTask: "" });
  };
  render() {
    return (
      <form onSubmit={this.handlePost}>
        <div>
          <input
          type={text}
          placeholder="Add to list"
          onChange={this.handleChange}
          value={this.state.newTask}
          />
          <button onClick={this.handlePost}>Add</button>
        </div>
        <button onAuxClick={this.completedTask}>Remove Completed</button>
      </form>
    );
  }
}
