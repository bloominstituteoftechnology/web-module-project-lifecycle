import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
    };
  }
  newItem = (evt) => {
    evt.preventDefault();
    this.props.handleAdd(this.state.newTask);
    this.setState({ ...this.state, newTask: "" });
  };

  handleChange = (evt) => {
    evt.preventDefault();
    this.setState({ ...this.state, newTask: evt.target.value });
  };
  render() {
    return (
      <form>
        <div>
          <input
            type="text"
            placeholder="Add to list"
            onChange={this.handleChange}
            value={this.state.newTask}
          />
          <button onClick={this.newItem}>Add</button>
        </div>
        <button>Remove Completed</button>
      </form>
    );
  }
}
