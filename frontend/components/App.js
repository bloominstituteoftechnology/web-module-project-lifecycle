import React from "react";
import Form from "./Form";
import TodoList from "./TodoList";
const URL = "http://localhost:9000/api/todos";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "",
          id: Date.now(),
          completed: false,
        },
      ],
    };
  }

  handleAdd = (input) => {
    const newTask = {
      task: input,
      id: Date.now(),
      completd: false,
    };
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTask],
    });
  };
  render() {
    const { todos } = this.state;
    console.log(this.state);
    return (
      <div>
        <TodoList todos={todos} />
        <Form handleAdd={this.handleAdd} />
      </div>
    );
  }
}
