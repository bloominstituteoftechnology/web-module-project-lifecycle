import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  
  
  render() {
    return (
      <>
        {this.props.todo.map((task) => {
          return <Todo task={task} key={task.id} toggleCompleted={this.props.toggleCompleted}/>
          
        })}
      </>
    )
  }
}
