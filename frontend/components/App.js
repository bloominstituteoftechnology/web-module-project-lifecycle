import React from 'react'
import axios from 'axios'
import Form from './Form'
import TodoList from './TodoList'

const URL = 'http://localhost:9000/api/todos'


export default class App extends React.Component {
  constructor() {
    super();
    this.state= {
      todo: [],
      showCompleted: true,
      shownTodo: []
    }
  }
 

  fetchData =() => {
    axios.get(URL)
      .then(({data}) => this.setState({...this.state, todo: data.data,shownTodo: data.data.filter(task => {return task.completed === false})}))
  }

  postData = (newTask) => {
    axios.post(URL, newTask)
      .then(res => {this.fetchData()})
  }

 addTask =(task) => {
      const newTask = {
        name: task,
        completed: false
      }
      this.postData(newTask)
    }

  componentDidMount = () => {
      this.fetchData()
   }

   toggleCompleted = (taskId) => {
    console.log(taskId)
    axios.patch(`${URL}/${taskId}`)
      .then(res => {this.fetchData()})
   }

   toggleView = () => {
    this.setState({showCompleted: !this.state.showCompleted})
   }




  render() {
    const stateToUse = this.state.showCompleted ? this.state.todo : this.state.shownTodo
    return (
      <>
        <TodoList todo={stateToUse} toggleCompleted={this.toggleCompleted} />
        <Form submit={this.addTask} showCompleted={this.state.showCompleted} toggleView={this.toggleView}/>
      </>
    )
  }
}
