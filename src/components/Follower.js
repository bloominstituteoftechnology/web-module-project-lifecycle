import React from "react";

class Follower extends React.Component {
  render() {
    return (
      <div className="follower-card">
        <img src={this.props.pic} />
        <h4>{this.props.username}</h4>
      </div>
    );
  }
}

export default Follower;