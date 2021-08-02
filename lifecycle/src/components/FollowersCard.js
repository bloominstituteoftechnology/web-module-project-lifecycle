import React from 'react'

class FollowersCard extends React.Component {
    render(){
        return(
            <div className='follower-card'>
                <img src={this.props.follower.avatar_url} alt='avatar'/>
                <h4>Username: {this.props.follower.login}</h4>
                <a href={this.props.follower.following_url}>See who I Follow too!</a>
            </div>
        )
    }
}

export default FollowersCard;