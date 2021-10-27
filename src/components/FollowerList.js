import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {

  render() {
    return (
      <div className="followers-list">
        {this.props.followersList.map(i => (
            <Follower key={i.id} username={i.login} pic={i.avatar_url} />
        ))}
        
      </div>
    );
  }
}

export default FollowerList;
