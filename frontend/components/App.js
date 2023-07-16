import React from 'react'
import axios from "axios"
import TodoList from "./TodoList"
import Form from "./Form"

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor(){
    super();
    this.state ={
      todos: [],
      error: {
        message: "",
        status: false
      },
      todoNameInput: ""
    }
  }

    onChangeTodoInput = (event) => {
      const { value } = event.target
      this.setState({
        ...this.state,
        todoNameInput: value
      })
    }

    fetchAllTodos = () => {
      axios.get(URL)
      .then(res => {
        this.setState({
          ...this.state, todos: res.data.data, error: {
            status: false
          }
        })
      })
      .catch(err => {
        this.setState({
          ...this.state, error: {
            message: err.response.data.message,
            status: !this.state.error.status
          }
        })
      })
    }

    postNewTodo = () => {
      axios.post(URL, {name: this.state.todoNameInput})
      .then(res => {
        this.fetchAllTodos();
        this.setState({
          ...this.state,
          todoNameInput: ""
        })
      })
      .catch(err => {
        this.setState({
          ...this.state, error: {
            message: err.response.data.message,
            status: !this.state.error.status
          }
        })
      })
    }

    onSubmitTodo = (event) => {
      event.preventDefault();
      this.postNewTodo();
    }

    componentDidMount(){
      this.fetchAllTodos();
    }

  render() {
    const { todos } = this.state;
    return (
      <div>
        {this.state.error.status? <div id="error">Error: {this.state.error.message}</div> : <></>}
        <h2>Todos:</h2>
        <TodoList data={todos}/>
        <Form todoInput={this.state.todoNameInput} onChangeTodoInput={this.onChangeTodoInput} onSubmitTodo={this.onSubmitTodo}></Form>
      </div>
    )
  }
}
