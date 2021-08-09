import React from 'react';
import './UserCard.css'



const UserCard = props => {
  return (
    <div className="cards">
      <div className="card">
          <img src={props.avatar} alt="" />
          <div className="container">
              <h4 className="card-title">{props.login}</h4>
              <p>{props.login} has {props.followers} follower</p>
          </div>
      </div>
    </div>
  );
};

export default UserCard; 