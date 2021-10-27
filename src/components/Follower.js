import React from "react";
import Reac from "react"

const Follower = props => {

    console.log('props: ', props);
    return (
        <div className = "follower-card"> 
            <div>
            <img src={props.follower.avatar_url} alt={props.follower.login} width ="200"/>
            <p>{props.follower.login}</p>
            </div>
            
        </div>
        );
    
}

export default Follower;