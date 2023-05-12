import React from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import axios from "axios";
const URL = "http://localhost:9000/api/todos";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      error: "",
    };
  }

  handleAdd = (input) => {
    const newTask = {
      name: input,
      id: Date.now(),
      completd: false,
    };
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTask],
      error: "",
    });
  };

  handleCompleted = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => {
        return todo.completed === false;
      }),
    });
  };

  toggleCompleted = (itemId) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) => {
        if (itemId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  setAxiosErrors = (err) =>
    this.setState({ ...this.state, error: err.response.data.message });

  getToDos = () => {
    axios
      .get(`${URL}`)
      .then((res) => {
        console.log(res);
        this.setState({ ...this.state, todos: res.data.data });
      })
      .catch(this.setAxiosErrors);
  };

  componentDidMount = () => {
    this.getToDos();
  };

  postToDo = (input) => {
    axios
      .post(URL, { name: input })
      .then((res) => {
        this.handleAdd(input);
      })
      .catch(this.setAxiosErrors);
  };

  render() {
    const { todos } = this.state;
    console.log(this.state.input);
    return (
      <div>
        <h3>Error : {this.state.error}</h3>
        <TodoList toggleCompleted={this.toggleCompleted} todos={todos} />
        <Form postToDo={this.postToDo} handleCompleted={this.handleCompleted} />
      </div>
    );
  }
}
