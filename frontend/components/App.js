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
      displayCompleted: true,
    }
  }

  onTodoNameInputChange = evt => {
    const {value} = evt.target
    this.setState({...this.state, todoNameInput: value})
  }

  postNewTodo = () => {
    axios.post(URL, {name: this.state.todoNameInput})
    .then(res => {
      this.setState({...this.state, todos: this.state.todos.concat(res.data.data) })
      this.resetForm()
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
    })
    .catch(this.setAxiosResponseErr)
  }

  toggleCompleted = id => () => {
    axios.patch(`${URL}/${id}`)
    .then(res => {
      this.setState({...this.state, todos: this.state.todos.map(td => {
        if(td.id !== id) return td
        return res.data.data
      })})
    })
    .catch(this.setAxiosResponseErr)
  }

  toggleDisplayCompleted=() => {
    this.setState({...this.state, displayCompleted: !this.state.displayCompleted})
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
            this.state.todos.reduce((acc, td ) => {
              if(this.state.displayCompleted || !td.completed) return acc.concat(
                <div onClick={this.toggleCompleted(td.id)} key = {td.id}>{td.name}{td.completed ? '✔️': ''}</div>
              )
              return acc
            },[])
              // return <div onClick={this.toggleCompleted(td.id)} key = {td.id}>{td.name}{td.completed ? '✔️': ''}</div>
            
          }
        </div>
        <form id ='todoForm'  onSubmit ={this.onTodoFormSubmit}>
          <input value = {this.state.todoNameInput} onChange = {this.onTodoNameInputChange} type = 'text' placeholder='Type todo'></input>
          <input type = 'submit'></input>
          <button onClick ={this.toggleDisplayCompleted}>{this.state.displayCompleted ? 'Hide':'Show'} the completed</button>
        </form>
      </div>
    )
  }
}
