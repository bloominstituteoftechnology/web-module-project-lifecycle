import React from 'react'

export default class Form extends React.Component {

  inputChangeHandler = (event) => {
    this.props.onChangeTodoInput(event)
  }

  handleSubmit = (event) => {
    this.props.onSubmitTodo(event);
  }

  handleClear = () => {
    this.props.handleClearButton();
  }


  render() {
    return (
      <div>
      <form id="todoForm" onSubmit={this.handleSubmit}> 
        <input
        value={this.props.todoInput}
        onChange={this.inputChangeHandler}
        type="text"
        placeholder='Type todo'
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={this.handleClear}>Clear Completed</button>
      </div>
    )
  }
}
