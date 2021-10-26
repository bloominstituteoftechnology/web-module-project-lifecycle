import React from 'react';
import axios from 'axios'

class User extends React.Component {
  

  render() {

    return(
    <div>
      <section>
        <img height='200px' width='200px' src={this.props.profile.avatar_url}/>
        <div>
          <h3>{this.props.profile.name}</h3>
          <p>{this.props.profile.login}</p>
          <h4>TOTAL REPOS: {this.props.profile.public_repos}</h4>
          <h4>TOTAL FOLLOWERS: {this.props.profile.followers}</h4>
        </div>
      </section>
      
    </div>);
  }
}

export default User;
