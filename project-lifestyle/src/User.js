import React from "react";
import "./User.css";
export default class User extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="user">
          <img src={this.props.userData.avatar_url} alt="avatar" width="200" />
          <div className="content">
            <h2 className="name">{this.props.userData.name}</h2>
            <p className="followers">
              Followers: {this.props.userData.followers}
            </p>
            <p className="following">
              Following: {this.props.userData.following}
            </p>
          </div>
        </div>
        <div className="img">
          <a href={this.props.userData.html_url} className="url">
            {this.props.userData.html_url}
          </a>
        </div>
      </div>
    );
  }
}
