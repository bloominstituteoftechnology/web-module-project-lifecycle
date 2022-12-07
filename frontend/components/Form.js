import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      formValue: ''
    }
  }

  handleChanges = (e) => this.setState({formValue: e.target.value})

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.formValue){
      this.props.submit(this.state.formValue);
      this.setState({formValue: ""})
    }
  }


  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.formValue} onChange={this.handleChanges}/>
          <button>Submit</button>
        </form>
        <button onClick={this.props.toggleView}>{this.props.showCompleted ? 'Hide' : 'Show'} Completed</button>
      </>
    )
  }
}
