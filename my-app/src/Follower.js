import React from 'react';

class Follower extends React.Component {


    render() {
        return (
            <div key={this.props.follower.id} className='follower'>
                <img src={this.props.follower.avatar_url} alt={this.props.follower.login} />
            </div>
        )
    }
}

export default Follower;