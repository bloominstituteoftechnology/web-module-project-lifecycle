import React from 'react';


const User = props => {
    return (
    <div className="userInfo"> 
    
        <h2> {props.user.name}</h2>
        <h4>{props.user.login}</h4>
        <img width="200" src={props.user.avatar_url} alt="User img" />
        <h3>Total Repos: {props.user.public_repos}</h3>
        <h3>Total Followers: {props.user.followers}</h3>

    </div>
    )
}
export default User 