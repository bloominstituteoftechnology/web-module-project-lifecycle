import React from 'react'
import axios from "axios"
import TodoList from "./TodoList"

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
    }
  }

    fetchAllTodos = () => {
      axios.get(URL)
      .then(res => {
        this.setState({
          ...this.state, todos: res.data.data
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
      </div>
    )
  }
}
