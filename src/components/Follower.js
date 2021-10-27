import React from "react";

const Follower =(props) => {

    const handleClick =()=>{
        props.clickSubmit(props.username);
    };

    return (
        
      <div onClick={handleClick} className="follower-card">
        <img src={props.pic} />
        <h4>{props.username}</h4>
      </div>
    );

}

export default Follower;