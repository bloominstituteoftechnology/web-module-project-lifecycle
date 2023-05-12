import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  toggle = (evt) => {
    evt.preventDefault();
    this.props.toggleCompleted(this.props.todo.id);
  };
  render() {
    return (
      <li onClick={this.toggle}>
        {this.props.todo.task}{" "}
        {this.props.todo.completed ? <span>&#10003;</span> : <span></span>}
      </li>
    );
  }
}
