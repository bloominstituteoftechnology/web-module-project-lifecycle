import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form id="todoForm" onSubmit={this.props.handleSubmit}>
          <input 
              value={this.props.todoNameInput} 
              onChange={this.props.handleInput} 
              type="text" 
              placeholder='Type todo'>
            </input>
          <input type="submit"></input>          
        </form>
        <button onClick={this.props.handleClear}>
          {this.props.displayCompleted ? 'Hide' : 'Show'} Completed
        </button>
      </div>
    )
  }
}
