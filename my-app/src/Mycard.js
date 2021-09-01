import React from 'react';

import './Follower.css';

class Mycard extends React.Component {

    render() {
        return (
            <div className='card'>
                <div className='pic'>
                    <img src={this.props.myCard.avatar_url} alt={this.props.myCard.login}/>
                </div>
                <div className='bio'> 
                    <p>Name: {this.props.myCard.name}</p>
                    <p>Location: {this.props.myCard.location}</p>
                    <p>Profile: {this.props.myCard.html_url}</p>
                </div>    
            </div>
        )
    }
}

export default Mycard;