import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <li>{this.props.data.name}{this.props.data.completed? <span> --- TASK COMPLETED</span> : <span></span>}</li>
    )
  }
}
