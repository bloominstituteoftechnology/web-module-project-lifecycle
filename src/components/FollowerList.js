import React from 'react';
import Follower from "./Follower";

class FollowerList extends React.Component {

    render() {
        console.log(this.props.followers);
        return(
            <div className="list-div">
                <h2>Followers:</h2>
                <div className="list-items">
                    <Follower />
                </div>
            </div>);
  }
}

export default FollowerList;