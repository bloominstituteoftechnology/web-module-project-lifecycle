import React from "react"


const Follower = props => {
    return (
    <div className="followerInfo">
        <h2> {props.follower.login}</h2>
        <img width="200" src={props.follower.avatar_url} />
    
    </div>
    )
}
export default Follower