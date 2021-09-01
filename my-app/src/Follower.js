import React from 'react';

import './Follower.css';

class Follower extends React.Component {

    render() {
        // console.log(this.props.follower)
        return (
            <>
            <div className='card'>
                <div className='pic'>
                    <img src={this.props.follower.avatar_url} alt={this.props.follower.login}/>
                </div>
                <div className='bio'> 
                    { this.props.follower.name && <p>Name: {this.props.follower.name}</p> }
                    { this.props.follower.location && <p>Location: {this.props.follower.location}</p> }
                    { this.props.follower.html_url && <p>Profile: {this.props.follower.html_url}</p> }
                </div>    
            </div>
            </>
        )
    }
}

export default Follower;