import React from "react";



class User extends React.Component {
  

  render() {
    const { user } = this.props;
    return(
     
      <div key={user.id} className="userPro">
        <img width='100' src={user.avatar_url} alt={user.name} />
        <div>
          <h1>{user.name}</h1>
          <h3>total repos: {user.public_repos}</h3>
          <h3>total follwoers: {user.followers}</h3>
        </div>
      </div>);
    
  }

}

export default User;