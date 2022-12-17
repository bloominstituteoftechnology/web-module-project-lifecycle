import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input 
          type='text' 
          onChange={this.props.inputChange}
          value={this.props.inputValue} />
        <button>Add me!</button>
      </form>
    )
  }
}