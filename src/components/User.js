import React from 'react';
import axios from 'axios'

class User extends React.Component {

  state = {
    profile: []
  }

  componentDidMount() {
    
        axios.get(`https://api.github.com/users/peterdavidconley`)
        .then(resp => {
          this.setState({
            ...this.state,
            profile: resp.data
          })
        })
        .catch(err => {
          console.log(err)
        })


}

  
    

  render() {

    console.log(this.state.profile)
    return(
    <div>
      <section>
        <img height='250px' width='250px' src={this.state.profile.avatar_url}/>
        <div>
          <h3>{this.state.profile.name}</h3>
          <p>{this.state.profile.login}</p>
          <h4>TOTAL REPOS: {this.state.profile.public_repos}</h4>
          <h4>TOTAL FOLLOWERS: {this.state.profile.followers}</h4>
        </div>
      </section>
      
    </div>);
  }
}

export default User;
