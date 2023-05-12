import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2 style={{ textDecoration: "underline" }}>Todo List: </h2>
        <ul>
          {this.props.todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                toggleCompleted={this.props.toggleCompleted}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
