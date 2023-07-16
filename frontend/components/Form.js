import React from 'react'

export default class Form extends React.Component {

  inputChangeHandler = (event) => {
    this.props.onChangeTodoInput(event)
  }

  handleSubmit = (event) => {
    this.props.onSubmitTodo(event);
  }

  render() {
    return (
      <form id="todoForm" onSubmit={this.handleSubmit}> 
        <input
        value={this.props.todoInput}
        onChange={this.inputChangeHandler}
        type="text"
        placeholder='Type todo'
        />
        <button>Submit</button>
        <button>Clear Completed</button>
      </form>
    )
  }
}
