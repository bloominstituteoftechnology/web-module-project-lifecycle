import React from 'react';

const UserCard = props => {
    return(
        <div className="CardContainer">
            <div>
                <img src={props.users.avatar_url} />
            </div>
            <h2>{props.users.name}</h2>
            <p>Username: {props.users.login}</p>
            <p>{props.users.location}</p>
            <p>Followers: {props.users.followers}</p>
            <p>Following: {props.users.following}</p>
            <p>{props.users.bio}</p>

        </div>
    )
}

export default UserCard;