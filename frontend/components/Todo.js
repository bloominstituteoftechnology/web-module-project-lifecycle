import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>
        {this.props.todo.task}{" "}
        {this.props.todo.completed ? <span>&#10003;</span> : <span></span>}
      </li>
    );
  }
}
