import React from 'react';


class User extends React.Component {
    
    render() {
        const { login, avatar_url, name, public_repos, followers } = this.props.userObj
        
      return (
          <div className='container'>
              <div className='image'>
              <img src={avatar_url} alt='user' />
              </div>
              <div className='text'>
                <h1>{name}</h1>
                <h4>{`(${login})`}</h4>
                <h2>{`Public Repos: ${public_repos}`}</h2>
                <h2>{`Followers: ${followers}`}</h2>
              </div>
          </div>
      )
    }
  }
  
  export default User;
  