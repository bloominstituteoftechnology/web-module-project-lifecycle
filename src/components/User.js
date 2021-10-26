import React from 'react';
import axios from 'axios'
import '../App.css'

class User extends React.Component {
  

  render() {

    return(
    <div>
      <section className='user'>
        <div>
          <img height='200px' width='200px' src={this.props.profile.avatar_url}/>
        </div>
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
