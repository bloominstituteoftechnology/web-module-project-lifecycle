import React, { Component } from 'react'
import './Followers.css'

class Followers extends Component {
    render() {
        return (
            <div className='FollowersComponent'>
                <h3>{this.props.follower.login}</h3>
                <img src={this.props.follower.avatar_url} alt={this.props.follower.login} style={{
                    height:'50px',
                    width: '50px'
                }}/>
                <h2><a href={this.props.follower.html_url}>Profile</a></h2>
            </div>
        )
    }
}

export default Followers
