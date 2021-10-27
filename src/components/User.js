import React from "react";

class User extends React.Component {
  render() {
    return (
      <div className="user-profile">
        <img src={this.props.pic} />
        <h2>{this.props.name}</h2>
        <h5>username: {this.props.login}</h5>
        <h4>Repos: {this.props.repos}</h4>
        <h4>Followers: {this.props.followers}</h4>
      </div>
    );
  }
}

export default User;
