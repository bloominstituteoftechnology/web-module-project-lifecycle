import React from "react";

class Follower extends React.Component {
  render() {
    // const { data } = this.props;
    return (
      <div className="card-container">
        <p>Follower name: {this.props.follower.login}</p>
        <p>ID: {this.props.follower.id}</p>
        <p>Type: {this.props.follower.type}</p>
        <p>URL: {this.props.follower.url}</p>
      </div>
    );
  }
}

export default Follower;
