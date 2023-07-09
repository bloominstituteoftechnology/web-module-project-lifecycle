import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
    <div>
      <form id="todoForm" 
      onSubmit={this.props.onTodoFormSubmit}>
          <input value={this.props.todoNameInput} 
          type="text" 
          placeholder="type todo" 
          onchange={this.props.onNameChange} ></input>
          <input type="submit"></input>
        </form>
        <button 
        onClick={this.props.toggleDisplayCompleted}>
          {this.props.displayCompleted ? 'Hide': 'Show'}
          Clear Completed</button>
    </div>
    )
  }
}
