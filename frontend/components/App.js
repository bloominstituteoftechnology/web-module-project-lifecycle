import React from 'react'
import axios from 'axios'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor (){
    super();
    this.state = {
      todos: [],
      error: '',
      todoNameInput: '',
    }
  }

  onTodoNameInputChange = evt => {
    const {value} = evt.target
    this.setState({...this.state, todoNameInput: value})
  }

  postNewTodo = () => {
    axios.post(URL, {name: this.state.todoNameInput})
    .then(res => {
      this.fetchAllTodos()
    })
    .catch(this.setAxiosResponseErr)
  }

  onTodoFormSubmit = evt => {
    evt.preventDefault()
    this.postNewTodo()
  }
  setAxiosResponseErr = (err) => this.setState({...this.state, error: err.response.data.message})
  resetForm = () => 
    this.setState({...this.state, todoNameInput: ''})
  
  fetchAllTodos = () =>{
    axios.get(URL)
    .then(res => {
      this.setState({...this.state, todos: res.data.data})
      this.resetForm()
    })
    .catch(this.setAxiosResponseErr)
  }

  componentDidMount(){
    this.fetchAllTodos()
  }
  render() {
    return (
      <div>
        <div id='error'>Error:{this.state.error}</div>
        <div id = 'todos'>
          <h2>Todos:</h2>
          {
            this.state.todos.map( td => {
              return <div key = {td.id}>{td.name}</div>
            })
          }
        </div>
        <form id ='todoForm'  onSubmit ={this.onTodoFormSubmit}>
          <input value = {this.state.todoNameInput} onChange = {this.onTodoNameInputChange} type = 'text' placeholder='Type todo'></input>
          <input type = 'submit'></input>
          <button>Clear the completed</button>
        </form>
      </div>
    )
  }
}
