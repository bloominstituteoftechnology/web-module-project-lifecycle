import React from 'react'

export default class Todo extends React.Component {
  toggle = (evt) => {
    evt.preventDefault();
    this.props.toggleCompleted(this.props.todo.id);
  };
  render() {
    return (
      <li onClick={this.toggle}>
        {this.props.todo.name}{" "}
        {this.props.todo.completed ? <span>&#10003;</span> : <span></span>}
      </li>
    );
  }
}
