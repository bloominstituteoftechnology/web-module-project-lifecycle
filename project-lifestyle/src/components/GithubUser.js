import React from 'react'

export default class GitHubUser extends React.Component {
    render() {
      const { myUser } = this.props;
      return (
        <div>  
          <h2>Login: {myUser.login}</h2>
          <h2>Name: {myUser.name}</h2>
          <h2>Location: {myUser.location}</h2>
          <h2>Followers: {myUser.followers}</h2>
          <h2>Following: {myUser.following}</h2>
        </div>
      );
    }
  }