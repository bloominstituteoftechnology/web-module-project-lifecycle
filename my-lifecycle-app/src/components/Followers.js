import React, { Component } from 'react';
import FollowersCard from './FollowersCard';

class Followers extends Component {

    render() {
        console.log('Followers.js this.props.followers', this.props.followers);
        return (
            <div className='followers'>
                <h2>Followers</h2>
                {this.props.followers.map(follower => {
                    return (<FollowersCard key={follower.id} follower={follower}/>)
                })}
            </div>
        );
    }
}

export default Followers;
