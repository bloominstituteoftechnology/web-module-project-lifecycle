import React from 'react';
import '../App.css'

const User = props => {
    return(
        <div ClassNamer='user'> 
            <img height='150' src={props.user.avatar_url} alt='' />

        <div className='bio'>
            <h3>{props.user.name}</h3>
            <p>{props.user.bio}</p>
            <a href={props.user.html_url}>{props.user.html}</a>
            <p>Followers: {props.user.followers}</p>
            <p>Following: {props.user.following}</p>
            <p>Company: {props.user.company}</p>
            <p>Location: {props.user.location}</p> 
        </div>
        </div>
    )
}

export default User;