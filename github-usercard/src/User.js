import React from "react";


const User = props => {
    return (
        <div className="cards">
            <div className="card">
                <img src={props.profilePic} alt="" />
                <div className="title-container">
                    <h3 className="title">{props.login}</h3>
                    <p>{props.login} is following {props.following} Coders</p>
                </div>
            </div>
        </div>
    );
};

export default User;