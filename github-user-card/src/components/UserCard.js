import React from 'react';

const UserCard = props => {
    return(
        <div className="container">
            <div className="card">
                <div>
                    <img src={props.users.avatar_url} />
                </div>
                <div className="name">
                    <p>{props.users.name}</p>
                </div>
                <br></br>
                <div className="username">
                    <p>Username: {props.users.login}</p>
                </div>
                <p>{props.users.location}</p>
                <p>Followers: {props.users.followers}</p>
                <p>Following: {props.users.following}</p>
                <p>{props.users.bio}</p>
            </div>
        </div>
    )
}

export default UserCard;